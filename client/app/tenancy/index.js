'use strict';

import angular from 'angular';
import routes from './tenancy.routes';
import TenancyController from './tenancy.controller';

export default angular.module('rentrApp.tenancy', ['rentrApp.auth', 'ui.router'])
  .config(routes)
  .controller('TenancyController', TenancyController)
  .name;
