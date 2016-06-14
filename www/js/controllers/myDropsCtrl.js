angular.module('starter.controllers')

.controller('myDropsCtrl', function($scope, $rootScope, $stateParams, dataService, authService) {
  $rootScope.hideNav = false;
  var memberId = JSON.parse(authService.getUserID());

  $scope.drops = dataService.getDropsByUser(memberId);
});