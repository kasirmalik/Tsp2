"use strict";
let stringArr = ["a", "b", "c"]; // string array
let numberArr = [1, 2, 3, "kasir"]; // number array
let booleanArr = [true, false, true]; // boolean array
// mixed array with different types
// let mixedArr = [1, "a", true, { name: "kasir" }]; // mixed array with different types
let mixedArr = [1, "a", true, { name: "kasir" }];
stringArr[0] = "d"; // updating first element of string array
numberArr[1] = 4; // updating second element of number array
booleanArr[2] = false; // updating third element of boolean array
stringArr.push("e"); // adding new element to string array
numberArr.push("7"); // adding new element to number array
numberArr.unshift(0); // adding new element to beginning of number array
mixedArr = stringArr; // adding new object to mixed array
let test = []; // empty array type = any
let bands = []; // string array
let mixed = []; // mixed array with different types
// tuple
let myTuple = ["kasir", 1, true]; // tuple with string, number and boolean more strict than array
let mixedt = ['john,', 1, true]; // mixed tuple with string, number and boolean
mixedt = myTuple; // assigning tuple to mixed tuple
// myTuple= mixedt // assigning mixed tuple to tuple will give error because mixed tuple is not strict
let myobj;
myobj = [];
console.log(typeof myobj);
myobj = bands;
myobj = {};
const exampleobj = {
    prop1: 'Dave',
    prop: true
};
exampleobj.prop = false;
let evh = {
    name: "array",
    active: true,
    album: [76, "kasir"]
};
let Jp = {
    name: "array",
    album: [89, "kasir", "loki"]
};
evh = Jp;
// how to make properties optional
const greetguitarist = (guitirist) => {
    return `hello ${guitirist.name}`;
};
console.log(greetguitarist(Jp));
let np = {
    name: "kasir",
    rollno: 87
};
const Glen = (gamer) => {
    // type narrowing
    if (gamer.rollno) {
        return `Hello ${gamer.name.toUpperCase()}`;
    }
    return "Hello";
};
// Enums 
