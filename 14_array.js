// // const myarry = new Array(1,2,3,4)
// // console.log(typeof myarry)
// // console.log(myarry)

// let myArray = [1,2,3,4,5]
// //myArray.push(6);
// //myArray.pop()
// //myArray.unshift(9)
// //myArray.shift()
// //console.log(myArray.includes(9));
// //console.log(myArray.indexOf(4));

// const myn1 = myArray.slice(1,3);
// console.log("A" ,myn1);

// const myn2 = myArray.splice(1,3)
// console.log("B", myn2);

// console.log(myArray)



// let marval_hero = ["thor","ironman","spiderman"]
// let dc_hero = ["superman","flash","batman"];

// const newh = marval_hero.concat(dc_hero);
// console.log(newh);
// const allnew = [...marval_hero,...dc_hero]
// console.log(allnew)


const another_array = [1,2,3,[4,5],6,[2,3,6],9,6,[2,5,2]]
const best_array = another_array.flat(Infinity)
console.log(best_array)


let score1 = 23
let score2 = 25
let score3 = 27

console.log(Array.of(score1,score2,score3));