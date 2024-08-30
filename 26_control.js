// const score = 200;

// if(score > 100) {
//     const power = "fly"
//     console.log(`user can : ${power}`)
// }

const balance = 1000;
// if(balance>100) console.log("test");



const islogedin = true
const debitcard = true

const islogedinfromgoogle = false
const islogedinfromemail = true

if(islogedin && debitcard){
    // console.log("YES you are access the cours")
}

if(islogedinfromgoogle || islogedinfromemail){
    // console.log("some part of web site you can access ");
    
}


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

switch(month) {
    case 1: 
    console.log("january");
    break;
    case 2: 
    console.log("febuary");
    break;
    case 3: 
    // console.log("march");
    break;
    case 4: 
    console.log("april");
    break;
    default:
        console.log("defoult case run");
        
    
}


const useremail = "h@hitesh.ai"

if(useremail){
    console.log("is Availble");
    
}
else{
    console.log("not avilable");
    
}

// false, 0 , -0, Brigt int On, undefine ,num, nan 


const arr = [];
if(arr.length === 0){
    console.log("array are empty");
    
}


const emptyOBJ = {}
if(Object.keys(emptyOBJ).length === 0){
    console.log("Object are empty");
    
}

// nullish coaliscing operate (??) null undefine

// let val1 = 5 ?? 15\
// val1 = undefined ?? 23

let val3 = null ?? 23

console.log(val3)

// ternary operater

let icecreameprice = 100

icecreameprice >= 80 ? console.log("less than 80") : console.log("greater than 80")



