// let userName:string  = "John example";
// console.log(userName)
// let a:number = 12;
// let b:number = 6;
// let c:boolean = true
// console.log(a / b)

// how typescript infers 
// implict 
let name2 ;
name2 = "john"

let meaninigOfLife :number;
meaninigOfLife =42

let isLoading:boolean;
isLoading=true;

let album: any; // any type of data // union type 
album= 67

const  sum =(a:number,b:string):number | string=> {
    return a + b
}
let postId:string | number;
let  isActive:number|boolean | string
let reg:RegExp = /\w+/g


// explicit
let name1:string = "kasir"