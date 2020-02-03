var myApp = angular.module('myApp',[]);

'use strict';

myApp.controller('MyFirstController', function($scope) {
  $scope.name = "";
  $scope.value = 0;

  $scope.display = function(){
      var total = calculateNumericForString($scope.name); //get the total value
      $scope.value = total;
  }

  function calculateNumericForString (string){
    var t = 0;
    for(var i = 0; i < string.length; i++){
        t += string.charCodeAt(i);
    }
    
    return t;
  }


});