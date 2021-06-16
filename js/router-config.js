var app = angular.module('BELEODAQ', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  //$urlRouterProvider.when("", "/");
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: true,
  });

  $stateProvider
    .state('LandingPage', {
      url: '/',
      templateUrl: 'carousel.html',
    })
    .state('ExhibitHall', {
      url: '/exhibit-hall',
      templateUrl: 'exhibit-hall.html',
      controller: 'hallCtrl',
    })
    /*** POD A ***/
    .state('PodA', {
      url: '',
      templateUrl: 'exhibit-hall.html',
      controller: 'podCtrl',
    })
    .state('PodA.Main', {
      url: '/role-of-mabs',
      templateUrl: 'content/pod-a.html',
    })
    .state('PodA.1', {
      url: '/mabs-in-infectious-disease',
      templateUrl: 'content/pod-a-1.html',
    })
    .state('PodA.2', {
      url: '/vaccines-and-mabs',
      templateUrl: 'content/pod-a-2.html',
    })
    .state('PodA.3', {
      url: '/patient-mab-eligibility-a',
      templateUrl: 'content/pod-a-3.html',
    });
});
