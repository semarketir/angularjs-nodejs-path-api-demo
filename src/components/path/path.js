import angular from 'angular';

import PathController from './PathController';
import PathDirective from './PathDirective';
import PathService from './PathService';

export default angular.module('path', [])
    .controller('pathController', PathController)
    .service('pathService', PathService)
    .directive('path', () => new PathDirective);
