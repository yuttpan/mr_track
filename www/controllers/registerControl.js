angular.module('starter')

 .controller('registerController',function ($scope,$http,$state,$ionicHistory) {

    console.log('Login Controller Start.');

    $scope.goback = function(){
          $ionicHistory.goBack();
    };

$scope.form = {};
$scope.registSave = function(data){

 

    var parm = {

'var_user' : $scope.form.user,
'var_password' : $scope.form.password,
'var_name' : $scope.form.name,
'var_email' : $scope.form.email,
'var_tel' : $scope.form.tel

    }
   console.log(parm)


    $http(
        
        {
          url:'http://ksnhealth.ddns.net/ksn_api/register.php',
          method:'GET',
          params: parm
        }
      ).then(function(response){
          console.log(response);
         // console.log(response.data.);
          if(response.data.status == 'success'){
            

            $state.go('login');
          }else{
            alert('ไม่สามารถลงทะเบียนได้');
 
   
          }

        },function(error){
          
        
        });
    }

    

 })


