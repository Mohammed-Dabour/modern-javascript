//Async & Await
let eat =false
let play =true
let sleep = true

const Eating =()=>{return new Promise((resolve,reject)=>{
    if(eat) {resolve("i'm eating ")}
    else{reject("not eat")}
}); }

const Playing =()=>{return new Promise((resolve,reject)=>{
    if(play) {resolve("i'm playing ")}
    else{reject("not play")}
});}
const Sleeping =()=>{return new Promise((resolve,reject)=>{
    if(sleep) {resolve("i'm sleeping ")}
    else{reject("not sleep")}
});}

const run =async()=>{
    try{
        const eatMessage = await Eating();
        console.log(eatMessage)
        const playMessage = await Playing();
        console.log(playMessage)
        const sleepMessage = await Sleeping();
        console.log(sleepMessage)
    }catch(reject){console.log(reject)}
}
run();
