export default class PathController {
    constructor($scope, $auth, pathService) {
        this.$scope = $scope;
        this.$auth = $auth;
        this.pathService = pathService;
        this.isButtonDisabled = false;
    }

    authenticate(provider) {
        this.$auth.authenticate(provider);
    }

    login() {
        this.$scope.$emit('loading', true, 'Waiting for Logon to Path');
        this.$auth.authenticate('path')
            .then((response) => {
                if (response && response.data) {
                    /**
                     * A JWT or an access token will be saved in Local Storage / Session Storage ( Browser - Client side )
                     * @see https://github.com/sahat/satellizer#authsettokentoken
                     */
                    this.$auth.setToken(response.data.access_token);
                    this.$scope.$emit('auth');
                }
            })
            .catch((response) => {
                this.$scope.$emit('loading', false);
                alert(`[Error]\n${JSON.stringify(resp)}`);
            });
    }

    share() {
        if (this.$auth.isAuthenticated() && !this.isButtonDisabled) {
            this.postPhotoMoment();
        } else {
            this.login();
        }
    }

    toggleButton() {
        this.isButtonDisabled = !this.isButtonDisabled;
        if (this.isButtonDisabled) {
            this.$scope.$emit('loading', true, 'Posting to Path...');
        } else {
            this.$scope.$emit('loading', false);
        }
    }
    
    postPhotoMoment() {
        const photoMoment = this.$scope.photoMoment;
        if (photoMoment) {
            this.toggleButton();
            /**
             * TODO:
             * - Create Popup / Dialog box for preview moment before posted on Path
             * - Create editable caption
             */
            this.pathService
                .postPhotoFromUrl({
                    imageUrl: photoMoment.image,
                    caption: photoMoment.title + ' by ' + photoMoment.artist
                })
                .then((resp) => {
                    this.toggleButton();
                    // Do something, e.g: Message box or anything for user.
                    alert(`[Success]\n${JSON.stringify(resp)}`);
                })
                .catch((resp) => {
                    this.toggleButton();
                    // Do something, e.g: Message box or anything for user information.
                    alert(`[Failed]\n${JSON.stringify(resp)}`);
                });
        }
    }
}

PathController.$inject = ['$scope', '$auth', 'pathService'];
