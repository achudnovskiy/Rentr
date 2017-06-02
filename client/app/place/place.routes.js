'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('place', {
    url: '/place/:placeId',
    template: require('./place.html'),
    controller: 'PlaceController',
    controllerAs: 'place',
    authenticate: true
  })
  .state('places', {
    url: '/place',
    template: require('./place.html'),
    controller: 'PlaceController',
    controllerAs: 'place',
    authenticate: true
  })
  .state('placeSearch', {
    url: '/place/search',
    template: require('./search/search.html'),
    controller: './search/PlaceSearchController',
    controllerAs: 'place',
    authenticate: true
  });
}
