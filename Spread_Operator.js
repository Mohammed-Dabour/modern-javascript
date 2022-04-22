//Spread operator : (...)
let oldArray=[1,2,3,4,5]
console.log(oldArray)
let newArray=[...oldArray,6,7]
console.log(newArray)
////////////////////////////
let oldObject={id:1 ,name:"seventh7"}
let newObject={...oldObject,age:21,name:"Seventh"}//override to name
console.log(oldObject)
console.log(newObject)
////////////////////////////
let sum = (...args)=>{
    console.log(args[0])
    return args.filter(item => item===7)  //filter => array function
}//... args : any parametar
console.log(sum(1,3,4,5,7))
