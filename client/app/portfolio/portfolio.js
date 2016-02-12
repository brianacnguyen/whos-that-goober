angular.module('whosThatGoober.portfolio', ['ui.bootstrap', 'ngAnimate'])

.controller('PortfolioController', function ($scope, PortfolioData) {
  $scope.projects = [PortfolioData.knowhere, PortfolioData.shouldWeWatchThis, PortfolioData.recflix, PortfolioData.doYourApps, PortfolioData.lol, PortfolioData.atsu];
});
