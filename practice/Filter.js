(function (){

    'use strict';

    angular.module('myFilter', [])
    .controller('FilterController', FilterController);

    FilterController.$inject = ['$scope', '$filter'];
    
    function FilterController($scope, $filter){
        $scope.Name = "Kartheek"

        var message  = "Kartheek";
        $scope.sayMessage = function (){
            var output = $filter('uppercase')(message);
            alert(1);
        }
    };

    




})