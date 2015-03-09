// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('overlayController',function($scope, $timeout){

        var startimg="img/image.jpg";
        $scope.image=startimg;
        $scope.textOverlay="";

        var canvas = document.getElementById('tempCanvas');
        var context = canvas.getContext('2d');

        $scope.createOverlay= function(){

          var source =  new Image();
          source.src = startimg;
          canvas.width = source.width;
          canvas.height = source.height;

          console.log(canvas);

          context.drawImage(source,0,0);

          context.font = "100px impact";
          textWidth = context.measureText($scope.frase).width;

          if (textWidth > canvas.offsetWidth) {
              context.font = "40px impact";
          }
          context.textAlign = 'center';
          context.fillStyle = 'white';

          context.fillText($scope.textOverlay,canvas.width/2,canvas.height*0.8);

            var imgURI = canvas.toDataURL();

          $timeout( function(){
              $scope.image = imgURI;
          }, 200);
        }

})