
http://www.codewars.com/kata/a-chain-adding-function/train/javascript

function add(n){
    var sumResult = function () {
        var sum = n;
        var length = arguments.length;
        for(var i=0; i<length; i++){
          sum += arguments[i];
          return add(sum);
        }
    }
    sumResult.valueOf = function(){
    return n;
    }
    return sumResult;
}

http://www.codewars.com/kata/function-cache/train/javascript

function cache(func) {
  var cacheResult ={};
  return function(){
    var key = JSON.stringify(arguments);
    if (!cacheResult.hasOwnProperty(key)) {
      cacheResult[key] = func.apply(this, arguments);
    }
    return cacheResult[key];
  }
}


function compose(f, g) {
    return function () {
        return f(g.apply(this, arguments));
    };
}


http://www.codewars.com/kata/function-composition/train/javascript

function compose(f,g) {
   return function () {
        return f(g.apply(this, arguments));
    };
}

http://www.codewars.com/kata/function-composition-1/train/javascript

function compose() {
  var funcs = arguments;
    return function(input){
      for(var i=funcs.length-1; i>=0; i--){
          input = funcs[i](input)
      }
      return input;
    }
}

http://www.codewars.com/kata/using-closures-to-share-class-state/train/javascript

var Cat = (function () {
    var sumOfWeights = 0;
    var noOfCats = 0;
    function Cat(name, weight) {
        if (!name || !weight) {
            throw new Error("name or weight values cannot be empty");
        }

        this.name = name
        noOfCats++;
        sumOfWeights += weight;

        Object.defineProperty(this, 'weight', {
            get: function () {
                return weight;
            },
            set: function (value) {
                sumOfWeights -= weight;
                sumOfWeights += value;
                weight = value;
            }
        });
    };

    Object.defineProperty(Cat, 'averageWeight', {
        get: function () {
            return function () {
                return sumOfWeights / noOfCats;
            }
        }
    });
    return Cat;
})();
