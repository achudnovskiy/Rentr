'use strict';

export default class TenancyController {
  /*@ngInject*/
  constructor($stateParams) {
    // Use the User $resource to fetch all users
    console.log($stateParams.tenancyId);
  }

}
