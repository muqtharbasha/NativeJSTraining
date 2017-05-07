
//http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  return array.toString();
}


//http://www.codewars.com/kata/opposite-number/train/javascript

function opposite(number) {
  var num = number * -1;
  return num;
}


//http://www.codewars.com/kata/basic-mathematical-operations

var operations = {
  "+": function (operand1, operand2) {
    return operand1 + operand2;
  },
  "-": function (operand1, operand2) {
    return operand1 - operand2;
  },
  "*": function (operand1, operand2) {
    return operand1 * operand2;
  },
  "/": function (operand1, operand2) {
    return operand1 / operand2;
  }
}

function basicOp(operation, value1, value2) {
  var res = operations[operation](value1, value2);
  return res;
}

//http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  var result, total;
  total = 40 * d;
  if (d < 3) {
    result = total;
  } else if (d >= 7) {
    result = (total - 50);
  } else {
    result = (total - 20);
  }
  return result;
}