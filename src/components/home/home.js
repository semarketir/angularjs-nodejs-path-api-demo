import angular from 'angular';

import HomeController from './HomeController';
import HomeService from './HomeService';
import HomeDirective from './HomeDirective';

export default angular.module('home', [])
    .controller('homeController', HomeController)
    .service('homeService', HomeService)
    .directive('home', () => new HomeDirective);
