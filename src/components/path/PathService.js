export default class PathService {
    constructor($http) {
        this.$http = $http;
    }

    postPhotoFromUrl(data) {
        const momentData = {
            source_url: data.imageUrl,
            caption: data.caption,
            private: !!data.private
        };
        return this.$http({method: 'POST', url: '/api/post-photo', data: momentData});
    }
}

PathService.$inject = ['$http'];
