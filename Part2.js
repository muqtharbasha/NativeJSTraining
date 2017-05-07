
//http://www.codewars.com/kata/calculating-with-functions

function calculating(number, operation) {
    if (!operation)
        return number;
    return operation(number);
}

function zero(operation) { return calculating(0, operation); }
function one(operation) { return calculating(1, operation); }
function two(operation) { return calculating(2, operation); }
function three(operation) { return calculating(3, operation); }
function four(operation) { return calculating(4, operation); }
function five(operation) { return calculating(5, operation); }
function six(operation) { return calculating(6, operation); }
function seven(operation) { return calculating(7, operation); }
function eight(operation) { return calculating(8, operation); }
function nine(operation) { return calculating(9, operation); }

function plus(x) {
    return function (y) {
        return y + x;
    }
}

function minus(x) {
    return function (y) {
        return y - x;
    }
}

function times(x) {
    return function (y) {
        return y * x;
    }
}

function dividedBy(x) {
    return function (y) {
        return y / x;
    }
}


// http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s)
{
  return s.length % 2 ? s.substr(s.length / 2, 1) : s.substr((s.length / 2) - 1, 2);
}

// http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  var f = [],
    t = [],
    result;
  items.forEach(function (item) {
    if (pred(item)) {
      t.push(item);
    } else {
      f.push(item);
    }
  });
  result = f.concat(t);
  items.length = 0;
  result.forEach(function (item) {
    items.push(item);
  });
  return f.length;
}

// http://www.codewars.com/kata/word-count
function countWords(str) {
  var res;
  str = str.trim();
  if(str){
   var rule=/\s{1,}/g;
        str = str.split(rule).join(" ");
        res = str.split(" ").length;
  }
  else{
   res = 0;
  }
  return res;
}