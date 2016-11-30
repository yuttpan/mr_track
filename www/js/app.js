// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function ($stateProvider,$urlRouterProvider) {

  $stateProvider

    .state('list',{
      url:'/list',
      templateUrl:'templates/list.html',
      controller:'listController'
    })

    .state('detail',{
      url:'/detail:{id}/{name}/{address}/{latitude}/{longitude}',
      templateUrl:'templates/detail.html',
      controller:'detailController'
    })

    .state('login',{
      url:'/login',
      templateUrl:'templates/login.html',
      controller:'loginController'
    })
    .state('report',{
url:'/report',
templateUrl:'templates/report.html',
controller:'reportController'
})
.state('eclaim',{
url:'/eclaim',
templateUrl:'templates/eclaim.html',
controller:'eclaimController'
})
 .state('register',{
url:'/register',
templateUrl:'templates/register.html',
controller:'registerController'
})
.state('send',{
url:'/send',
templateUrl:'templates/send.html',
controller:'sendController'
})

  $urlRouterProvider.otherwise('/login')

})
