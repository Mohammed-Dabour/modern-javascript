//EX: mainApp page 


//first way to import 
//import sayHello  from "./Export.mjs";   error
//second way to import
//import { say1 ,z} from './Export.mjs';

//say1("welcome")
//console.log(z)
//sayHello("Seventh")    karem here found error

import Car from "./classes.mjs"; 
let car1 = new Car("green");

car1.printColor();
car1.printColor1("blue")