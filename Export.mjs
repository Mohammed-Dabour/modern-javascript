//first way to export 
export const sayHello = (name)=>console.log(name)
export const x=10
//second way to export (only one function or variable)
//const sayGoodbye = (message)=console.log (message)
const y=7
export default sayGoodbye;
//third way to export (one or more function or variable)
const say1 = (message)=>console.log(message)
const say2 = (message)=>console.log(message)
const z=3
export {say1,say2,z}

