import {ENDPOINT, AUTH} from '../config';

export default ['$authProvider', ($authProvider) => {
    $authProvider.oauth2({
        name: 'path',
        clientId: AUTH.CLIENT_ID,
        url: AUTH.AUTH_TOKEN,
        redirectUri: AUTH.AUTH_CALLBACK,
        authorizationEndpoint: ENDPOINT.AUTHORIZATION
    });
}];
