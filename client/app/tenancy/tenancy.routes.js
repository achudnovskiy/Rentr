'use strict';

export default function routes($stateProvider) {
  'ngInject';

 $stateProvider.state('tenancies', {
    url: '/tenancy/',
    template: require('./tenancy.html'),
    controller: 'TenancyController',
    controllerAs: 'tenancy',
    authenticate: true
  });
  $stateProvider.state('tenancy', {
    url: '/tenancy/:tenancyId',
    template: require('./tenancy.html'),
    controller: 'TenancyController',
    controllerAs: 'tenancy',
    authenticate: true
  });
}
