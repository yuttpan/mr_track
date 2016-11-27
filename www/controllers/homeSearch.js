angular.module('starter')

  .controller('homeSearchController', function ($scope, $state, $http) {

    


    if (window.localStorage['status'] != 'success') {
      console.log(window.localStorage['userid'])
      $scope.username = window.localStorage['username'];

    }

    $scope.btnHome = function (data) {

      $state.go('list');
    }




 $scope.tumbonSelect = function (data) {



      var parm = {
        'tumbonid' : data 
      }

console.log(parm)
      $http(

        {
          url: 'http://ksnhealth.ddns.net/ksn_api/villageService.php',
          method: 'POST',
          params: parm
        }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.villageData = response.data ;

    console.log($scope.villageData)
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  })
 }




$scope.villageSelect = function (data) {

var parm = {
        'village_code' : data 
      }

      console.log(parm)

$http(

        {
          url: 'http://ksnhealth.ddns.net/ksn_api/homeService.php',
          method: 'POST',
          params: parm
        }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.houseData = response.data ;

    console.log($scope.houseData)
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  })

}


$scope.btnDetail = function (data) {
    console.log(data.head_person);

    
    console.log('Pressed.');
   $state.go('detail',{id:data.id,name: data.head_person,latitude: data.latitude,longitude : data.longitude,
     address: data.address});
  }

  })







  



    


   



