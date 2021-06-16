var app = angular.module('BELEODAQ', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: true,
  });

  $stateProvider.state('LandingPage', {
    url: '/',
    templateUrl: 'carousel.html',
  });
});
