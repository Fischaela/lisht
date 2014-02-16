'use strict';

angular.module('lishtApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);