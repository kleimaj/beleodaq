var app = angular.module('BELEODAQ', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: true,
  });

  $stateProvider
    .state('LandingPage', {
      url: '/',
      templateUrl: 'carousel.html',
    })
    .state('PTCL', {
      url: '/ptcl',
      templateUrl: 'content/ptcl/ptcl.html',
    })
    .state('PTCL2', {
      url: '/ptcl2',
      templateUrl: 'content/ptcl/ptcl2.html',
    });
});
