angular.module('starter')

.controller('logController',function ($scope,$http,$state,$stateParams,userService) {
 $scope.form = {} ;
  $scope.btnHome = function (data) {

      $state.go('report');
    }

            $scope.results = "result here.";
 


 $scope.log = function(data) {
	  var parm = {

'var_user' : $scope.form.user,
//'var_an' : $scope.form.an_text,
//'var_action' : "R"
//'var_date' : $scope.form.date

    }
   console.log(parm)
 $http(
        
        {
          url:'http://ksnhealth.ddns.net/mra_api/log.php',
          method:'GET',
          params: parm
        }
      ).then(function(response){
          console.log(response.data);
        // console.log(response.data.status);
        $scope.data = response.data

        },function(error){
          
        
        });
    

 }

  $scope.user = window.localStorage['username'] ;
$scope.form.user = $scope.user ;
console.log(window.localStorage['username']); 

      $scope.log() ;     
});