export default class HomeController {
    constructor($scope, $auth, homeService) {
        this.$scope = $scope;
        this.homeService = homeService;

        $scope.isLogon = $auth.isAuthenticated();
        $scope.playlist = [];

        $scope.$on('loading', (event, status, text) => {
            this.setLoading(status, text);
        });

        $scope.$on('auth', () => {
            $scope.isLogon = $auth.isAuthenticated();
            this.hideLoading();
        });

        $scope.logout = () => {
            this.showLoading();
            $auth.logout();
            $scope.$emit('auth');
        };

        this.showLoading();
        this.getPlaylist();
    }

    getPlaylist() {
        this.homeService.getData()
            .then((resp) => {
                if (resp.data && resp.data.playlist) {
                    this.$scope.playlist.length = 0;

                    const playlist = resp.data.playlist;
                    _(_.keys(playlist)).forEach((val) => {
                        this.$scope.playlist = this.$scope.playlist.concat(playlist[val]);
                    });

                    this.hideLoading();
                }
            })
            .catch((resp) => {
                this.hideLoading();
                alert(`[Error]\n${JSON.stringify(resp)}`);
            });
    }

    showLoading() {
        this.setLoading(true);
    }

    hideLoading() {
        this.setLoading(false);
    }

    setLoading(status, text = 'Loading') {
        if (status) {
            this.$scope.textLoading = text;
        }
        this.$scope.isLoading = status;
    }
};

HomeController.$inject = ['$scope', '$auth', 'homeService'];
