'use strict';

import angular from 'angular';
import PlaceSearchController from './search.controller';

export default angular.module('rentrApp.placeSearch', ['rentrApp.auth', 'ui.router'])
  .config(routes)
  .controller('PlaceSearchController', TenancyController)
  .name;
