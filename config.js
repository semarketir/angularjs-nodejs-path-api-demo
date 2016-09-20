export const SERVER = {
    PROTOCOL: 'http',
    HOST: 'localhost',
    PORT: 3000
};
const BASE_URL = `${SERVER.PROTOCOL}://${SERVER.HOST}:${SERVER.PORT}`;

const PARTNER_ENDPOINT = 'https://partner.path.com';
export const ENDPOINT = {
    PARTNER_ENDPOINT,
    AUTHORIZATION: `${PARTNER_ENDPOINT}/oauth2/authenticate`,
    ACCESS_TOKEN: `${PARTNER_ENDPOINT}/oauth2/access_token`,
    API: {
        PHOTO: `${PARTNER_ENDPOINT}/1/moment/photo`
    }
};

// @see /support/server/config.js for `Client Secret`
export const AUTH = {
    AUTH_CALLBACK: `${BASE_URL}/redirect`,
    AUTH_TOKEN: `${BASE_URL}/token`,
    CLIENT_ID: '<YOUR-CLIENT-ID>'
};
