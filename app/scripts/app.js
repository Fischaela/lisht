'use strict';

angular.module('lishtApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ListCtrl'
      })
      .when('/options', {
        templateUrl: 'views/options.html',
        controller: 'ListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);