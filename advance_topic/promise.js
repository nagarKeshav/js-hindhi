const promiseOne = new Promise(function(resolve,reject) {
    setTimeout(()=>{
        console.log("aysk task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("aysk tast 2 is cmplete")
        resolve()
    }, 1000);
}).then(()=>{
    console.log("promise consumed");
    
})

const promisetree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username: "chai", email: "chai@codewith"})
    },1000)
})

promisetree.then((user)=>{
console.log(user);

})