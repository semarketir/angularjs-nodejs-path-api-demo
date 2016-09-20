export default class HomeService {
    constructor($http) {
        this.$http = $http;
    }

    getData() {
        return this.$http({method: 'GET', url: '/api/get-playlist'});
    }
}

HomeService.$inject = ['$http'];
