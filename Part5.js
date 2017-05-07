http://www.codewars.com/kata/new-with-apply/train/javascript

function construct(func) {
    var args = Array.prototype.slice.call(arguments, 1);
    var responseObject = Object.create(func.prototype);
    func.apply(responseObject, args);
    return responseObject;
}

http://www.codewars.com/kata/extract-nested-object-reference/train/javascript

Object.prototype.hash = function (string) {
    var myObject = string.split('.');
    var result = this;
    for (var i = 0; i < myObject.length; i++) {
        if (result[myObject[i]]) {
            result = result[myObject[i]];
        } else {
            result = undefined;
            break;
        }
    }
    return result;
}


http://www.codewars.com/kata/array-helpers/train/javascript

Array.prototype.square = function () {
    return this.map(function (num) {
        return num * num;
    });
}

Array.prototype.cube = function () {
    return this.map(function (num) {
        return num * num * num;
    });
}

Array.prototype.sum = function () {
    return this.reduce(function (a, b) {
        return a + b;
    }, 0);
}

Array.prototype.average = function () {
    return this.sum() / this.length;
}

Array.prototype.even = function () {
    return this.filter(function (num) {
        if (num % 2 == 0) return num;
    });
}

Array.prototype.odd = function () {
    return this.filter(function (num) {
        if (num % 2 != 0) return num;
    });
}

http://www.codewars.com/kata/santaclausable-interface/train/javascript

function isSantaClausable(obj) {
    return (obj && (typeof obj.sayHoHoHo === 'function') &&
        (typeof obj.distributeGifts === "function") &&
        (typeof obj.goDownTheChimney === "function")
    );
}

