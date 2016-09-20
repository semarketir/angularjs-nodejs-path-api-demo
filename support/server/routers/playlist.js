import request from 'request';

const BBC_PLAYLIST_RADIO = 'http://www.bbc.co.uk/radio1/playlist.json';

export default {
    getPlaylist(req, res) {
        request.get(BBC_PLAYLIST_RADIO, (error, response, body) => {
            if (error) {
                return res.json({status: false, error: JSON.stringify(error)});
            }
            res.json(body ? JSON.parse(body) : {playlist: []});
        });
    }
};
