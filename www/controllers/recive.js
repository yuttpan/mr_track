angular.module('starter')

.controller('reciveController',function ($scope,$http,$state,$stateParams,userService) {
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


 $scope.rec = function(data) {
	  var parm = {

'var_user' : $scope.form.user,
'var_an' : $scope.form.an_text,
'var_action' : "R"
//'var_date' : $scope.form.date

    }
   console.log(parm)
 $http(
        
        {
          url:'http://ksnhealth.ddns.net/mra_api/send.php',
          method:'GET',
          params: parm
        }
      ).then(function(response){
          console.log(response);
        // console.log(response.data.status);
          if(response.data.status == 'success'){
            
alert('บันทึกข้อมูลสำเร็จ');
         $scope.form.an_text = "" ;
          }else{
            alert('ไม่สามารถบันทึกข้อมูลได้');
 
   
          }

        },function(error){
          
        
        });
    

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
