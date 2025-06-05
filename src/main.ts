// type alias

type stringorNumber = string | number

type stringorNumberarray = (string | number)[]

type Globalist = {

}

type UserId = stringorNumber

// interface PostId = stringorNumber

// litreal types 
// to avoid  dry 
let myNmae : "kasir"
// myNmae = 'john'

let username : 'dave' | 'John' | 'amy'
// username = 'kasir'

// basic functions 

const add = (a:number,b:number):number=>{
    return a + b
}
// return not any thing it will give us void
const logMsg = (message:any)=>{
    console.log(message)
}
logMsg('hello');
logMsg(add(2,4))


let subtract = function (a:number,b:number):number{
    return a-b
}

type mathFunction = (a:number,b:number)=> number

let multiply : mathFunction = function(c,d){
    return c * d
}
logMsg(multiply(2,7))

interface gateFunsction {
    (a:number,b:number):number
}
// optional params

const addAll = (a:number,b:number,c?:number):number=>{
    // type Gaurd
    if (typeof c !='undefined') {
         return a + b + c
    }
    return a + b
   
}