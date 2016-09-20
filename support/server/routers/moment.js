import request from 'request';
import config from '../config';

export default {
    /**
     * In this case ( demo ), this router function just for forward data from angular post request to partner API's Path
     * So, remove some useless headers from previous ( angular ) request is needed for well
     * @see https://api.path.com/developers/docs#post-moment-photo ( From URL on request section )
     */
    postPhotoMoment(req, res) {
        delete req.headers.host;
        delete req.headers.origin;
        delete req.headers.referer;

        request.post(config.ENDPOINT.API.PHOTO, {
            headers: req.headers,
            body: JSON.stringify(req.body)
        }, (error, resp, body) => {
            if (error) {
                return res.json({status: false, error: JSON.stringify(error)});
            }
            res.json(body);
        });
    }
};
