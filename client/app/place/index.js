'use strict';

import angular from 'angular';
import routes from './place.routes';
import PlaceController from './place.controller';

export default angular.module('rentrApp.place', ['rentrApp.auth', 'ui.router'])
  .config(routes)
  .controller('PlaceController', PlaceController)
  .name;
