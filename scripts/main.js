angular.module('myApp', [])
    .controller('NewCtrl', function($scope, location) {
        $scope.expression = location.getElements();
        $scope.answer = " ";
        $scope.addElement = function (number) {
            $scope.answer += location.AddElement(number);
        };
        $scope.back = function () {
            $scope.answer = location.deleteAnswer($scope.answer);
        };
        $scope.submit = function () {
            if (location.inspection($scope.answer)) {
              alert('Success');
              $scope.expression = location.getElements();
              $scope.answer = " ";
            } else {
                alert('Wrong');
            }
        };
})
.service('location', function() {
  var elements_expression = {};
  return {
          getElements: function () {
            var min = 0, max = 200, result = 0, i = 0, random = function (min, max) {
              return element = Math.floor(Math.random() * (max - min)) + min;
            };
              i = random(0, 4);
              elements_expression.a = random(0, 200);
              elements_expression.b = random(0, 200);
              switch (i) {
                case 0: elements_expression.sing = " + ";
                  break;
                case 1: elements_expression.sing = " - ";
                    while ((elements_expression.a - elements_expression.b)<0) {
                        elements_expression.a = random(0, 200);
                        elements_expression.b = random(0, 200);
                    };
                  break;
                case 2: elements_expression.sing = " * ";
                    max = 15;
                    elements_expression.a = random(0, 15);
                    elements_expression.b = random(0, 15);
                  break;
                case 3: elements_expression.sing = " / ";
                    min = 1;
                    max = 225;
                    while ((elements_expression.a % elements_expression.b) !== 0) {
                        elements_expression.a = random(1, 225);
                        elements_expression.b = random(1, 225);
                    };
                  break;
              }
              switch (elements_expression.sing) {
                  case " * ": elements_expression.result = elements_expression.a * elements_expression.b;
                    break;
                  case " + ": elements_expression.result = elements_expression.a + elements_expression.b;
                    break;
                  case " - ": elements_expression.result = elements_expression.a - elements_expression.b;
                    break;
                  case " / ": elements_expression.result = elements_expression.a / elements_expression.b;
                    break;
                  }
            return elements_expression;
          },
          AddElement: function (number) {
            var answer;
              switch (number) {
                  case 1: answer = '1';
                    break;
                  case 2: answer = '2';
                    break;
                  case 3: answer = '3';
                    break;
                  case 4: answer = '4';
                    break;
                  case 5: answer = '5';
                    break;
                  case 6: answer = '6';
                    break;
                  case 7: answer = '7';
                    break;
                  case 8: answer = '8';
                    break;
                  case 9: answer = '9';
                    break;
                  case 0: answer = '0';
                    break;
                  }
              return answer;
          },
          deleteAnswer: function (answer) {
              answer = answer.slice(0, -1);
              return answer;
          },
          inspection: function (answer) {
            return Number(answer) == elements_expression.result;
          }
  }
})
