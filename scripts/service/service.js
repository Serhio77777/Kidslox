angular.module('myApp').service('location', function() {
    var elements_expression = {};
    return {
          getElements: function () {
              var i;
              function randomNumber(min, max) {
                  return  Math.floor(Math.random() * (max - min)) + min;
              }
              i = randomNumber(0, 4);
              elements_expression.b = randomNumber(0, 200);
              elements_expression.a = randomNumber(0, 200);
              switch (i) {
                case 0: elements_expression.sing = ' + ';
                        elements_expression.result = elements_expression.a + elements_expression.b
                    break;
                case 1: elements_expression.sing = ' - ';
                        while (elements_expression.a - elements_expression.b < 0) {
                            elements_expression.a = randomNumber(0, 200);
                            elements_expression.b = randomNumber(0, 200);
                        };
                        elements_expression.result = elements_expression.a - elements_expression.b;
                    break;
                case 2: elements_expression.sing = ' * ';
                        elements_expression.a = randomNumber(0, 15);
                        elements_expression.b = randomNumber(0, 15);
                        elements_expression.result = elements_expression.a * elements_expression.b;
                    break;
                case 3: elements_expression.sing = ' / ';
                        while (elements_expression.a % elements_expression.b !== 0) {
                            elements_expression.a = randomNumber(1, 225);
                            elements_expression.b = randomNumber(1, 225);
                        };
                        elements_expression.result = elements_expression.a / elements_expression.b;
                    break;
              }
              return elements_expression;
          },
          addElement: function (number) {
              return number + '';
          },
          deleteAnswer: function (answer) {
              return answer = answer.slice(0, -1);;
          },
          inspection: function (answer) {
              return Number(answer) === elements_expression.result;
          }
  }
})
