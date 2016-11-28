angular.module('starter')

.controller('reportController',function ($scope,$http,$state,$stateParams) {
    $scope.btnHome = function (data) {

      $state.go('list');
    }
});
