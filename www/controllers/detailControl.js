angular.module('starter')

.controller('detailController',function ($scope,$http,$state,$stateParams,$ionicPopup,$cordovaGeolocation,$cordovaDialogs) {

  console.log('DETAIL START.');
  console.log($stateParams.name);
$scope.form = {};
$scope.form.address = $stateParams.address ;
$scope.form.Headperson = $stateParams.name ;
$scope.form.latitude = $stateParams.latitude ;
$scope.form.longitude = $stateParams.longitude ;
$scope.form.id = $stateParams.id ;
$scope.form.user = window.localStorage['username'] ;
console.log($scope.txtaddress);

 
  $scope.btnBack = function () {
    console.log('back pressed.');
    $state.go('homeSearch');
  }

  $scope.btnCall = function () {
    console.log('btn Calling.......');

  
    var parm = {
'var_id' : $scope.form.id,
'var_headperson' : $scope.form.Headperson,
'var_latitude' : $scope.form.latitude ,
'var_longitude' : $scope.form.longitude,
'var_user' : $scope.form.user 


    }
  $http(
        
        {
          url:'http://ksnhealth.ddns.net/ksn_api/updategps.php',
          method:'GET',
          params: parm
        }
      ).then(function(response){
          console.log(response);
         // console.log(response.data.);
          if(response.data.status == 'success'){
             $cordovaDialogs.alert('บันทึกข้อมูลสำเร็จ', 'บันทึกข้อมูล', 'ตกลง')
    .then(function() {
      
    });
            // alert('บันทึกข้อมูลสำเร็จ');
          }else{
            alert('ไม่สามารถบันทึกได้');
 
          }

        },function(error){
          
        
        });
  }










 $scope.gpsCall = function () {
 var posOptions = {timeout: 10000, enableHighAccuracy: false};
   $cordovaGeolocation
   .getCurrentPosition(posOptions)
	
   .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
       $scope.form.latitude = lat;
  $scope.form.longitude = long;
      console.log(lat + '   ' + long)
   }, function(err) {
      console.log(err)
   });
 }
 

})
