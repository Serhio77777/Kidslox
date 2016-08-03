angular.module('myApp').service('location', function() {
    var elements_expression = {};
    return {
          getElements: function () {
              var min = 0,
                  max = 200,
                  result = 0,
                  i = 0;
              function randomNumber(min, max) {
                  return element = Math.floor(Math.random() * (max - min)) + min;
              }
              i = randomNumber(0, 4);
              elements_expression.a = randomNumber(0, 200);
              elements_expression.b = randomNumber(0, 200);
              switch (i) {
                case 0: elements_expression.sing = ' + ';
                  break;
                case 1: elements_expression.sing = ' - ';
                    while (elements_expression.a - elements_expression.b < 0) {
                        elements_expression.a = randomNumber(0, 200);
                        elements_expression.b = randomNumber(0, 200);
                    };
                  break;
                case 2: elements_expression.sing = ' * ';
                    max = 15;
                    elements_expression.a = randomNumber(0, 15);
                    elements_expression.b = randomNumber(0, 15);
                  break;
                case 3: elements_expression.sing = ' / ';
                    min = 1;
                    max = 225;
                    while (elements_expression.a % elements_expression.b !== 0) {
                        elements_expression.a = randomNumber(1, 225);
                        elements_expression.b = randomNumber(1, 225);
                    };
                  break;
              }

              switch (elements_expression.sing) {
                  case ' * ': elements_expression.result = elements_expression.a * elements_expression.b;
                    break;
                  case ' + ': elements_expression.result = elements_expression.a + elements_expression.b;
                    break;
                  case ' - ': elements_expression.result = elements_expression.a - elements_expression.b;
                    break;
                  case ' / ': elements_expression.result = elements_expression.a / elements_expression.b;
                    break;
              }
              return elements_expression;
          },
          addElement: function (number) {
              return number + '';
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
