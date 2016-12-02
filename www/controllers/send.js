angular.module('starter')

.controller('sendController',function ($scope,$http,$state,$stateParams,userService) {
 $scope.form = {} ;
  $scope.btnHome = function (data) {

      $state.go('list');
    }

            $scope.results = "result here.";
 $scope.form.date = new Date();

 $scope.cancle = function() {
	 $scope.form.an_text = "" ;

	 console.log("cancle")
 }


 $scope.send = function(data) {
	 console.log(data)
 }

  $scope.user = window.localStorage['username'] ;
$scope.form.user = $scope.user ;
console.log(window.localStorage['username']); 

            $scope.scan = function () {
                cordova.plugins.barcodeScanner.scan(
		            function (result) {
		                $scope.results = JSON.stringify(result);
		                $scope.$apply();
						$scope.form.an_text = result.text ;
		            },
		            function (error) {
		                alert("Scanning failed: " + error);
		            }
	          );
        };

});
