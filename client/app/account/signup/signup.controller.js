'use strict';

import angular from 'angular';

export default class SignupController {
  user = {
    name: '',
    email: '',
    password: '',
  };
  errors = {};
  submitted = false;

  /*@ngInject*/
  constructor(Auth, $state, $stateParams) {
    this.Auth = Auth;
    this.$state = $state;
    this.user.role = $stateParams.accountType;
    this.isTenant = $stateParams.accountType === 'tenant';                     
  }

  register(form) {
    this.submitted = true;

    if(form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        role: this.user.role
      })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}
