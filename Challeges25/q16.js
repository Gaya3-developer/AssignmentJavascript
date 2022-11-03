/*Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7*/
function basicOp(operation, value1, value2) {
let res;
  switch (operation) {
    case "+":
res = value1 + value2;
      break;
    case "-":
        res = value1 - value2;
      break;
    case "*":
        res = value1 * value2;
      break;
    case "/":
        res = value1 / value2;
      break;
  }
  console.log(res);
}
basicOp('+', 4, 7);
basicOp('/', 49, 7);
basicOp('*', 5, 5);
basicOp('-', 15, 18);

//using eval

function basicOpEval(operation, value1, value2)
{
    const operationStr = value1 + operation + value2;
  var str = eval(operationStr);
  console.log(str);
}
basicOpEval('+', 4, 7);
basicOpEval('/', 49, 7);
basicOpEval('*', 5, 5);
basicOpEval('-', 15, 18);