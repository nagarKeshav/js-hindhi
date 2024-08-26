
const mysym = Symbol("mykey1");

const jsUser = {
    name: "keshav",
    "fullname": "keshav nagar",
    age: 18,
    [mysym] : "mykey1",
    location: "kota",
    email: "lokocode8@gmail.com",
    login: ["maonday , sunday"]

};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mysym]);


jsUser.greeting = function() {
    console.log("hello js user");
    
}

jsUser.greetingTwo = function() {
    console.log(`hello js  user ${this.name}`);
  
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
