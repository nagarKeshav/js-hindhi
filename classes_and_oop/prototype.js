let myname = "hitesh      "
console.log(myname.truelenth)


let myheros =  ["thor","spiderman"]


let heropower = {
 
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function (){
        console.log(`spidly power this ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = ()=>{
console.log("hitesh is present all of object");
}


Array.prototype.heyhitesh = ()=>{
    console.log("says hitesh hellow");
    
}

// heropower.hitesh()/
// myheros.hitesh()


myheros.heyhitesh()
// heropower.heyhitesh()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);

// let antherusername = "chai        "

// Object.prototype.truelenth  = ()=>{
//     console.log(`${this}`);
//     console.log(`${this.name}`);
//     console.log(`true lenth is ${this.trim().length}`);

// }

// antherusername.truelenth()



let antherusername = "chai        ";

// Define the method without modifying Object.prototype
function trueLength(str) {
    console.log(`Original string: "${str}"`);
    console.log(`True length is: ${str.trim().length}`);
}

// Call the function with the string
trueLength(antherusername);
