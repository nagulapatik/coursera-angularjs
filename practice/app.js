var myApp = angular.module('myApp',[]);

'use strict';

myApp.controller('MyFirstController', function($scope, $filter) {
  $scope.name = "";
  $scope.value = 0;

    $scope.display = function(){
        var total = calculateNumericForString($scope.name); //get the total value
        $scope.value = total;
    }

    $scope.turnUpper = function(){
        var upperFilter = $filter('uppercase');
        $scope.upper = upperFilter($scope.name);
    }


    function calculateNumericForString (string){
        var t = 0;
        for(var i = 0; i < string.length; i++){
            t += string.charCodeAt(i);
        }

        return t;
    }


});