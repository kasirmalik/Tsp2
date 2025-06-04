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
