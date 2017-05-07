
http://www.codewars.com/kata/a-function-within-a-function/train/javascript

// return a function that returns n
function always (n) {
  return function () {
    return n;
  }
}

http://www.codewars.com/kata/can-you-keep-a-secret/train/javascript

function createSecretHolder(secret) {
   var obj = {
      getSecret: function () {
          return secret;
      },
      setSecret: function (value) {
          secret = value;
      }
    };
 return obj
}

http://www.codewars.com/kata/closures-and-scopes

function createFunctions(n) {
  var callbacks = [];
  
  for (var i=0; i<n; i++) {
    (function(i) {
      callbacks.push(function() {
        return i;
      });
    })(i);
  }
  return callbacks;
}

http://www.codewars.com/kata/prefill-an-array/train/javascript

function prefill(n, v, myArray) {
    myArray = myArray || [];

    if (!v) {
        return new Array(n);
    }

    var num = Number(n);

    if (isNaN(num) || n < 0 || !isFinite(n)) {
        throw new TypeError(n + " is invalid");
    }

    if (num > 0) {
        myArray.push(v);
        return prefill(--n, v, myArray);
    } else {
        return myArray;
    }
}
