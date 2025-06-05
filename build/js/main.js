"use strict";
// type alias
// interface PostId = stringorNumber
// litreal types 
// to avoid  dry 
let myNmae;
// myNmae = 'john'
let username;
// username = 'kasir'
// basic functions 
const add = (a, b) => {
    return a + b;
};
// return not any thing it will give us void
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
logMsg(add(2, 4));
let subtract = function (a, b) {
    return a - b;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 7));
// optional params
const addAll = (a, b, c) => {
    // type Gaurd
    if (typeof c != 'undefined') {
        return a + b + c;
    }
    return a + b;
};
