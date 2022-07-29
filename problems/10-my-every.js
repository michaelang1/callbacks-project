/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

let myEvery = function (array, cb) {
    // method 1: use a for loop;

    // for (let i = 0; i < array.length; i++) {
    //     let el = array[i];
    //     if (cb(el, i) === false) {
    //         return false;
    //     }
    // }

    // return true;

    // method 2: use forEach method and a counter,
    // the method 1 returns does not work for forEach
    // as forEach always returns undefined after the loop,
    // have to use a counter;

    let countTrue = 0;

    array.forEach(function(el) {
        if (cb(el)) {
            countTrue++;
        }
    });

    if (countTrue === array.length) {
        return true;
    } else {
        return false;
    }

};




let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function (string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myEvery;
