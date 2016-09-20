import _ from 'lodash'
import angular from 'angular';
import 'satellizer';

import config from './config';
import './components/home/home';
import './components/path/path';

const app = angular.module('app', ['satellizer', 'home', 'path']).config(config);

angular.bootstrap(document.body, [app]);
