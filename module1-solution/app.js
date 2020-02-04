(function (){

    'use strict';

    angular.module('myApp',[])
    .controller('LunchCheckController', LunchCheckController);

    //inject dependencies using $inject
    LunchCheckController.$inject = ['$scope', '$filter'];

    function LunchCheckController($scope, $filter){
        
        //ng-click on button
        $scope.checkDishes = function(){

            //get the value from text-box
            var message = calculateNumberOfDishes($scope.dishes);
            $scope.message = message;
        }

        function calculateNumberOfDishes(value){
            if(value != undefined){
                
                var values = value.replace(/\s/g, "").split(',');
                var finalvalues = removeFalsyElementsFromArray(values);

                if(finalvalues.length <= 3 && finalvalues.length > 0){
                    return "Enjoy!";
                } else if(finalvalues.length > 3){
                    return "Too much!";
                } else{
                    return "Please enter data first";
                }
            } else{
                return "Please enter data first";
            }
        }

        function removeFalsyElementsFromArray(someArray) {
            var newArray = [];
            for(var index = 0; index < someArray.length; index++) {
                if(someArray[index]) {
                    alert(someArray[index]);
                    newArray.push(someArray[index]);
                }
            }
            return newArray;
        }
    }

})();