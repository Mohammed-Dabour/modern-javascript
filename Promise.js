// promise
let myPromise = new Promise((resolve,reject)=>{
    const x=0
    if(x===0) {resolve("this ok")}
    else{reject("this falid")}
}).then(
    (success)=>console.log(success),
    (error)=>console.log(error)
);
///multi promise
let eat =true
let play =false
let sleep = true

let eating = new Promise((resolve,reject)=>{
    if(eat) {resolve("i'm eating ")}
    else{reject("not eat")}
});
let playing = new Promise((resolve,reject)=>{
    if(play) {resolve("i'm playing ")}
    else{reject("not play")}
});
let sleeping = new Promise((resolve,reject)=>{
    if(sleep) {resolve("i'm sleeping ")}
    else{reject("not sleep")}
});

eating.then(
    (success)=>{
        console.log(success)
        playing.then(
            (success)=>{
                console.log(success)
                sleeping.then(
                    (success)=>console.log(success),
                    (error)=>console.log(error)
                );
            },
            (error)=>console.log(error)
        );
    },
    (error)=>console.log(error)
);

