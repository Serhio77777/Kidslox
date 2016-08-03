angular.module('myApp').directive('myEnter', function ($timeout) {
    return function (scope, element, attrs) {
        element.bind('keydown', function (event) {
            if (event.which === 13) {
                 $timeout(function (){
                   scope.$eval(attrs.myEnter);
                 }, 0);
                event.preventDefault();
            }
        });
    };
});
