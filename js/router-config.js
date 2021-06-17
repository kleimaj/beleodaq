var app = angular.module('BELEODAQ', ['ui.router']);
var offsetHeight, footer;
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
      resolve: {
        loadEventListeners: function () {
          window.onscroll = function (ev) {
            toggleIndications();
            checkFooter();
          };
        },
      },
    })
    .state('PTCL', {
      url: '/ptcl',
      templateUrl: 'content/ptcl/ptcl.html',
      resolve: {
        loadEventListeners: function () {
          window.onscroll = function (ev) {
            toggleIndications();
            checkFooter();
          };
        },
      },
    })
    .state('PTCL2', {
      url: '/ptcl2',
      templateUrl: 'content/ptcl/ptcl2.html',
      resolve: {
        loadEventListeners: function () {
          window.onscroll = function (ev) {
            toggleIndications();
            checkFooter();
          };
        },
      },
    })
    .state('ABOUT', {
      url: '/about',
      templateUrl: 'content/about/about.html',
      resolve: {
        loadEventListeners: function () {
          window.onscroll = function (ev) {
            toggleIndications();
            checkFooter();
          };
        },
      },
    });
});

function checkFooter() {
  offsetHeight = getAbsoluteHeight('main');
  footer = document.querySelector('footer');
  if (innerHeight + window.scrollY >= offsetHeight - 1) {
    footer.style.position = 'relative';
    footer.lastElementChild.classList.remove('hidden');
    document.querySelector('.more').classList.add('hidden');
    document.querySelector('.less').classList.remove('hidden');
  } else {
    footer.style.position = 'fixed';
    footer.lastElementChild.classList.add('hidden');
    document.querySelector('.less').classList.add('hidden');
    document.querySelector('.more').classList.remove('hidden');
  }
}

function getAbsoluteHeight(el) {
  // Get the DOM Node if you pass in a string
  el = typeof el === 'string' ? document.querySelector(el) : el;
  var styles = window.getComputedStyle(el, '');
  var margin =
    parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
  return Math.ceil(el.offsetHeight + margin);
}

// Toggle Indications in header if scrollY > 0
function toggleIndications() {
  if (window.scrollY > 0) {
    document.querySelector('.indications').style.display = 'none';
  } else {
    document.querySelector('.indications').style.display = 'block';
  }
}
