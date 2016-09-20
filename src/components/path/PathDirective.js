import template from './path.html';

export default class PathDirective {
    constructor() {
        this.transclude = false;
        this.replace = false;
        this.template = template;
        this.restrict = 'E';
        this.scope = {
            photoMoment: '@'
        };
        this.controller = 'pathController as $pathCtrl';
        this.bindToController = true;
    }

    link(scope, element, attrs) {
        if (attrs.photoMoment) {
            scope.photoMoment = JSON.parse(attrs.photoMoment);
        }
    }
}
