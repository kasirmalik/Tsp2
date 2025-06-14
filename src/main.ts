const str = <T>(arg:T):T => arg

const isObj = <T>(arg:T):boolean=>{
    return (typeof arg ==='object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj("john"))
console.log(isObj([1,2,3]))
console.log(isObj(null))


const isTrue = <T>(arg:T):{arg:T ,is:boolean}=>{
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
        
        
    }
    if(isObj(arg) && !Object.keys(arg as keyof T)){
        return { arg, is: false }
    }
    return { arg, is: true }
}
