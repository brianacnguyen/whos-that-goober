angular.module('whosThatGoober.about', [])

.controller('AboutController', function ($scope, AboutMe) {
  $scope.strong = AboutMe.strong;
  $scope.experienced = AboutMe.experienced;
});
