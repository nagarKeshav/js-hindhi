

function saymyname() {
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
    
}

//saymyname();

function addtwonumber(number1,number2) {
    console.log(number1+number2);
    
}
//addtwonumber(4,5)

function addtwonumber(number1,number2) {
    console.log(number1+number2);
    
}
// addtwonumber(4,5)

function addtwonumber(number1,number2) {
    let result = number1+number2;
    return result;
    
   
    
}
const result = addtwonumber(4,5)
//console.log(result);


function loginUserMAsseage(username) {
    if(!undefined){
        console.log("enter the user name")
        return;
    }
    return `${username} just loged in`
}

//console.log(loginUserMAsseage());


// ... rest operater

function addcarditem (...num1) {
    return num1
}

//console.log(addcarditem(200,3000,500,2))


// how to access to object in function

const user = {
    username: "keshav",
    price: 100
}

function handleobject(anyobject) {
  console.log(`Username is ${anyobject.username} and it is price ${anyobject.price}`);
  
}

//handleobject(user)


const mynewarray = [200,300,400,500];

function handlearray(getarray) {
return getarray[1]
}

//console.log(handlearray(mynewarray));




if(true){
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a)
//console.log(b)
console.log(c)