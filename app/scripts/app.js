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

angular.module('lishtOptionsApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/options.html',
        controller: 'OptionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);