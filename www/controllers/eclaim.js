angular.module('starter')

.controller('eclaimController',function ($scope,$http,$state,$stateParams) {

    console.log("ECLAIM")
    $scope.btnHome = function (data) {

      $state.go('report');
    }

$http.get('http://ksnhealth.ddns.net/mra_api/select_discharge.php').success(function(data){
$scope.data = data ;
$scope.length = data.length ;
console.log($scope.data)
});


});
