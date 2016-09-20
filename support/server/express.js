import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import {SERVER} from '../../config';
import router from './router';

const app = express();

app.use(cookieParser('secret'));
// For parsing application/json
app.use(bodyParser.json());
// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

router.register(app);

export default {
    bind(connect, baseDir) {
        return connect.server({
            name: 'Partner API Example',
            debug: true,
            root: baseDir,
            host: SERVER.HOST,
            port: SERVER.PORT,
            livereload: true,
            middleware () {
                return [app];
            }
        });
    }
};
