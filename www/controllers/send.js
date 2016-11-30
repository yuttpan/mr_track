angular.module('starter')

.controller('sendController',function ($scope,$http,$state,$stateParams) {
 $scope.an_text = '' ;
            $scope.results = "result here.";

            $scope.scan = function () {
                cordova.plugins.barcodeScanner.scan(
		            function (result) {
		                $scope.results = JSON.stringify(result);
		                $scope.$apply();
						$scope.an_text = result.text ;
		            },
		            function (error) {
		                alert("Scanning failed: " + error);
		            }
	          );
        };

});
