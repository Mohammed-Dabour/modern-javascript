//Higher order function : function accept another function or function returun another function
const lowerCAse = (str)=>{
    return str.toLowerCase();
}
//higher order 
const transform = (word , fun)=>{
    return fun(word)
}
console.log(transform("SEVENTH",lowerCAse))//lowerCase : call back function 
/////////////
const sayHi =(welcome)=>{
    return(name)=>{
        console.log(`${welcome} ${name}`)
    }
}
const say = sayHi("Welcome ")//say = return ()=>
console.log(say("Seventh"))
