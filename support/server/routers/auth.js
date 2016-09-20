import request from 'request';
import config from '../config';

export default {
    callback(req, res) {
        res.end();
    },

    /**
     * Request an Access Token from Path API
     * @see https://api.path.com/developers/docs#auth ( POST /oauth2/access_token section )
     */
    getAccessToken(req, res, next) {
        const code = req.body.code;
        if (!code) {
            return next(new Error('Code is not provided'));
        }

        const options = {
            url: config.ENDPOINT.ACCESS_TOKEN,
            form: {
                grant_type: 'authorization_code',
                client_id: config.AUTH.CLIENT_ID,
                client_secret: config.AUTH.CLIENT_SECRET,
                code: code
            }
        };

        request.post(options, (error, response, body) => {
            if (error) {
                return res.json({status: false, error: JSON.stringify(error)});
            }
            res.json(JSON.parse(body));
        });
    }
};
