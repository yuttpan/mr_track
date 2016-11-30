angular.module('starter')

  .controller('loginController',function ($scope,$http,$state,userService) {

    console.log('Login Controller Start.');

    $scope.form = {};

    $scope.btnLogin = function(){
      //console.log($scope.form);
      var parm = {

 'var_username' : $scope.form.txt_usr ,
      'var_password' : $scope.form.txt_pwd

      };
     
      
    console.log(parm);
      $http(
        
        {
          url:'http://ksnhealth.ddns.net/mra_api/login.php',
          method:'GET',
          params: parm
        }
      ).then(function(response){
          console.log(response);
         // console.log(response.data.);
          if(response.data.status == 'success'){
             window.localStorage['status'] = response.data.data.status;
             window.localStorage['userid'] = response.data.data.userid;
              window.localStorage['username'] = response.data.data.name;
                 userService.setText(response.data.data.name);
                 
console.log(userService.getText());

            $state.go('list');
          }else{
            alert('ชื่อผู้ใช้งานหรือรหัสผ่านผิดพลาด');
 window.localStorage['id'] = response.data.status;
   console.log(window.localStorage['status']);
          }

        },function(error){
          
        
        });
    }

    $scope.btnRegist = function(){
       $state.go('register');
    }


  })
