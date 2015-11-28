angular.module("app").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('index', {
      url: '/index',
      templateUrl: 'client/module/views/index.ng.html',
      controller: 'indexCtrl'
    });
    
  $urlRouterProvider.otherwise("/index");
});