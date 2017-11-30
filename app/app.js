'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/view1', {

        templateUrl: './templates/dashboard/main.html'

      })
      .when('/view2', {
        templateUrl: './templates/intel/main.html'
      });






  $routeProvider.otherwise({redirectTo: '/view1'});
}]);





