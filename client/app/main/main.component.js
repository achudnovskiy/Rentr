import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  

  /*@ngInject*/
  constructor($http,Auth,$scope) {
    this.$http = $http;
    this.Auth = Auth;
    this.$scope= $scope;
    this.$scope.isLoggedIn = false;
    this.$scope.tenancies = [];
    this.$scope.userInfo = {};
    
    this.$scope.formatDate = function(date) {
      let jsDate = new Date(date);
      var month = jsDate.getMonth() + 1;
      var year = jsDate.getFullYear();
      return  month + '/' + year;
    }
  }

  $onInit() {
    this.Auth.isLoggedIn((function(loggedIn) {
      this.$scope.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.populateTenancies();
        this.populateUserInfo();
      }
    }).bind(this));
  }

  populateTenancies(){
    this.$http.get('/api/tenancies')
      .then(response => {
        this.$scope.tenancies = response.data;
      });
  }
  populateUserInfo(){
    let currentUser = this.Auth.getCurrentUserSync();
    this.$scope.userInfo.name = currentUser.name;
  }

 


  // addThing() {
  //   if(this.newThing) {
  //     this.$http.post('/api/things', {
  //       name: this.newThing
  //     });
  //     this.newThing = '';
  //   }
  // }

  // deleteThing(thing) {
  //   this.$http.delete(`/api/things/${thing._id}`);
  // }
}

export default angular.module('rentrApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
