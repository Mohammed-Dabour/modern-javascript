//Destructuring: [num1,,num3]=array with array
const arr=[1,2,4,7]
const [num1, , ,num4]=arr
console.log(num1,num4)
//destructuring  {id ,name}=object with object
const obj=[{id:1,name:"Seventh"},{age:21 ,city:"Tala"}]//object inside array
const [{name},{age}]=obj
console.log(name ,age)