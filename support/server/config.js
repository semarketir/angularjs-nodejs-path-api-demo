import {ENDPOINT, AUTH} from '../../config';

// Keep your client secret from Path API on Server side.
const CLIENT_SECRET = '<YOUR-CLIENT-SECRET>';

export default {
    AUTH: {
        CLIENT_SECRET,
        CLIENT_ID: AUTH.CLIENT_ID
    },
    ENDPOINT
};
