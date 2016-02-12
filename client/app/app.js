angular.module('whosThatGoober', [
  'whosThatGoober.main',
  'whosThatGoober.about',
  'whosThatGoober.portfolio',
  'whosThatGoober.contact',
  'whosThatGoober.data',
  'ngRoute',
  'ui.bootstrap'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    })
    .when('/about', {
      templateUrl: 'app/about/about.html',
      controller: 'AboutController'
    })
    .when('/portfolio', {
      templateUrl: 'app/portfolio/portfolio.html',
      controller: 'PortfolioController'
    })
    .when('/contact', {
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactController'
    })
    .otherwise({
      redirectTo: '/'
    });
})