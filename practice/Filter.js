(function (){

    'use strict';

    angular.module('myFilter',[])
    .controller('FilterController', FilterController)
    //step 2: Specify the filter factory function
    .filter('custom', CustomFilterFactory)
    .filter('truth', TruthFilter);

    //inject dependencies using $inject
    FilterController.$inject = ['$scope', '$filter', 'customFilter'];


    //step 3: Inject it with name of the filter + Filter
    function FilterController($scope, $filter, customFilter){
        
        $scope.name = "Test";
        $scope.cookieCost = .45;

        $scope.sayMessage = function(){
            var message = "kartheek likes AngularJs!";
            var output = $filter('uppercase')(message);
            return output;
        }

        $scope.sayLovesMessage = function(){
            var message = "kartheek likes AngularJs!";
            message = customFilter(message, "some val");
            return message;
        }
    }

    //step 1
    //define the filter factory function
    function CustomFilterFactory(){
        return function (input){
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }

    function TruthFilter(){
        return function (input, target, replace){
            alert(input);
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    }

})();