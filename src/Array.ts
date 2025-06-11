let stringArr = ["a", "b", "c"]; // string array
let numberArr = [1, 2, 3,"kasir"]; // number array
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
mixedArr = stringArr // adding new object to mixed array

let test = [] // empty array type = any
let bands: string[] = []; // string array
let mixed: (string | number | boolean)[] = []; // mixed array with different types

// tuple
let myTuple:[string,number,boolean] = ["kasir", 1, true]; // tuple with string, number and boolean more strict than array
let mixedt = ['john,', 1, true]; // mixed tuple with string, number and boolean
mixedt = myTuple; // assigning tuple to mixed tuple
// myTuple= mixedt // assigning mixed tuple to tuple will give error because mixed tuple is not strict

let myobj:object
myobj = []
console.log(typeof myobj)

myobj = bands
myobj = {}

const exampleobj = {
    prop1 : 'Dave',
    prop: true
}
exampleobj.prop = false

type Guitarist = {
    name:string,
    active?:boolean,
    album:(string | number)[]
}

let evh:Guitarist = {
    name:"array",
    active :true,
    album:[76,"kasir"]
}
let Jp:Guitarist = {
    name:"array",
    album:[89,"kasir","loki"]
}
 evh = Jp
 // how to make properties optional

 const greetguitarist = (guitirist:Guitarist)=>{
    return `hello ${guitirist.name}`
 }
 console.log(greetguitarist(Jp))

 ///   interface it does same thing as type
interface Gamer{
    name:string,
    rollno:number
}
let np:Gamer= {
    name:"kasir",
    rollno:87
}
const Glen=(gamer:Gamer)=>{
    // type narrowing
    if (gamer.rollno) {
        return `Hello ${gamer.name.toUpperCase()}`
    }
    return "Hello"
}

// Enums 
enum Grade {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F"
}