// FOR
 const array = [1,2,3,4,56,7]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element)
    
}


for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element)
    
}

for (let i = 0; i < 10; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop is ${j} and inner loop ${i}`);
      
    }

}
for (let i = 0; i < 10; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop is ${j} and inner loop ${i}`);

        // console.log(i + '*' + j + '=' + i*j );
        
      
    }

}

for (let index = 1; index <= 10; index++) {

     if(index == 5){
        // console.log(`dedected number ${index}`)
        break;
     }
    // console.log(`value of i is ${index}`)
  
}

for (let index = 1; index <= 10; index++) {

     if(index == 5){
        // console.log(`dedected number ${index}`)
        continue;
     }
    // console.log(`value of i is ${index}`)
  
}


//  while loop 

// const index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }
const Myarray = ["flash","batman","superman"]
let arr = 0
while (arr <= Myarray.length) {
    // console.log(`value of index is ${Myarray[arr]}`);
    arr = arr + 1
}
let score = 1;
do {
    // console.log(` value of score ${score}`);
    score++
} while (score <= 10);



// ++++++++++++++++++++ for of loop ++++++++++++++++++++++++

const arrr  = [1,2,3,4,5,6]

for (const val of arrr) {
    // console.log(val);
    
}

const greeting = "hello world"

for (const greet of greeting) {
    // console.log(` each charcter of ${greet}`);
    
}


//  MAP

const map = new Map;

map.set('IN','india')
map.set('USA','united state of america')
map.set('FR','france')


// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-' ,value);
    
}

const  myobj = {
    game: "nas",
    game2: "pubj"
}

// for (const [key,value] of myobj) {
//     // console.log([key,":-",value]);
    
// }

const myobject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobject) {
//    console.log(`${key} shortcut for  ${myobject[key]}`);
   
}



for (const key in arrr) {
//   console.log(arrr[key]);
  
}


// for each

const coding = ["js","cpp","ruby","swift"]

coding.forEach( (val) => {
// console.log(val);

})

function printme(item) {
    console.log(item);
    
}

// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);

})


const mycoding = [
    {
        programinglanguage: "javascript",
        languagefilename: "js"
    },
    {
        programinglanguage: "java",
        languagefilename: "java"
    },
    {
        programinglanguage: "python",
        languagefilename: "py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagefilename,);
    
})
