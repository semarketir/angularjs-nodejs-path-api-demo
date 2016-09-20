import template from './home.html';

export default class HomeDirective {
    constructor() {
        this.transclude = false;
        this.replace = false;
        this.template = template;
        this.restrict = 'E';
        this.scope = true;
        this.controller = 'homeController as $homeCtrl';
        this.bindToController = true;
    }
}
