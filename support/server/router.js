import auth from './routers/auth';
import moment from './routers/moment';
import playlist from './routers/playlist';

export default {
    register(app) {
        app.get('/api/get-playlist', playlist.getPlaylist);
        app.post('/api/post-photo', moment.postPhotoMoment);
        app.get('/redirect', auth.callback);
        app.post('/token', auth.getAccessToken);
    }
};
