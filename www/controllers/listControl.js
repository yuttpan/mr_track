angular.module('starter')

.controller('listController',function ($scope,$state,$http) {

$scope.username = window.localStorage['username'] ;

  console.log($scope.username)
   

   if (window.localStorage['status'] != 'success'){
 console.log(window.localStorage['userid'])
  
   }
   

  //$scope.myDataArray = [
  //  {
  //    name:'Phongsak Thomthitchong',
  //    nick:'Bank',
  //    social:'fb.com/senchaboxdev',
  //    mobile:'086-979-7070'
  //  },
  //  {
  //    name:'Wichai Thomthitchong',
  //    nick:'Dad',
  //    social:'youtube.com/senchabox',
  //    mobile:'1234567890'
  //  },
  //  {
  //    name:'Nakrit Thomthitchong',
  //    nick:'Namo',
  //    social:'senchabox.com',
  //    mobile:'0987654321'
  //  }
  //]

  $scope.btnHomeSearch = function (data) {
   
    $state.go('');
  }

 $scope.btnLoggout = function (data) {
    window.localStorage.removeItem("id");
    $state.go('login');
  }
})
