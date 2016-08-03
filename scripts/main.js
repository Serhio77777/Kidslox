angular.module('myApp', [])
    .controller('NewCtrl', function($scope, location) {
        $scope.expression = location.getElements();
        $scope.answer = '';
        $scope.addNewElement = function (number) {
            $scope.answer += location.addElement(number);
        };
        $scope.back = function () {
            $scope.answer = location.deleteAnswer($scope.answer);
        };
        $scope.submit = function () {
            if (location.inspection($scope.answer)) {
                $scope.answer = '';
                alert('Success');
                $scope.expression = location.getElements();
            } else {
                $scope.answer = '';
                alert('Wrong');
            }
        };
})
