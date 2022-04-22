//array methods like : (Slice , Splice , Reverse , Concat , Join ,Filter , Find , Sort , Reduce) 
arr1=["a","b","c","d","e","f"]
arr2=[1,2,3,4,5,6,8,7,10]

//const arr3=arr1.slice(2)//c,b,d,e,f
//const arr3=arr1.splice(3)//d,e.f but arr1=a,b,c
//const arr3=arr1.reverse()//reverse array
//const arr3=arr1.concat(arr2)//sum two arrays
//const arr3=arr1.join("=>")//insert anything between items of array
//const arr3=arr2.filter(item => item>3)//4,5,6
//const arr3=arr2.find(item=>item>3)//return value not array =>(4)
//const arr3=arr2.reduce((total,current)=>total+current)
const arr3=arr2.sort((a,b)=>{
    if(a>b){return 1}//print value 
    if(b>a){return -1}//switch print b
})
console.log(arr3)