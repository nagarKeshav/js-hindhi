const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("aysk task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise consumed");

})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("aysk tast 2 is cmplete")
        resolve()
    }, 1000);
}).then(() => {
    console.log("promise consumed");

})

const promisetree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@codewith" })
    }, 1000)
})

promisetree.then((user) => {
    console.log(user);

})

const promisefour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "keshav", password: 12334 })
        } else {
            reject('just went wrong ')
        }
    }, 1000);
})

promisefour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);

}).catch((error) => {
    console.log(error)
}).finally(() => console.log("the promise either resolve or rejected")
)


const promisefive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: 12334 })
        } else {
            reject('just js  went wrong ')
        }
    }, 1000);
})

async function consumedpromisefive() {
    try {
        const response = await promisefive
        console.log(response);

    } catch (error) {
        console.log(error);
    }

}
consumedpromisefive()



// async function  getalluser() {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);

// }

// getalluser()
// async function  getalluser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error){

//     console.log("E: ",error);
//   }
// }

// getalluser()




fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);

}).catch((error) => {
    console.log(error);

})