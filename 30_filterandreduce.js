const number = [1,2,3,4,5,6,7,8,9,10]

// const mynum = number.filter( (num) => num>4)

// console.log(mynum);
const mynum = number.filter( (num) => {
    return num>4
})

// console.log(mynum);

const myarr = []
number.forEach((num) => {
    if(num>4){
        myarr.push(num)
    }
})
// console.log(myarr)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1986, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 2010 },
  ];

//   const mybooks = books.filter((bk) => bk.genre === 'History')
// const mybooks = books.filter((bk) => bk.edition === 2010)

const mybooks = books.filter((bk) => bk.publish > 2000)

//   console.log(mybooks);


const mynumber = [1,2,3,4,5,6,7,8,9]

// const newnum = mynumber.map((num) => num+10)
const newnum = mynumber.map((num) => num*10).map((num) => num + 1).filter((num) => num >= 40)

// console.log(newnum);

// reduce


const arr = [1,2,3]

const myTotal = arr.reduce((acc,currvalue) => {
    // console.log(`acc : ${acc} and currval : ${currvalue}`);
    
    return acc + currvalue
},0)
// console.log(myTotal);

const cours = [
    {
        coursename:"js",
        price: 1999
    },
    {
        coursename:"py",
        price: 999
    },
    {
        coursename:"c++",
        price: 2999
    },
    {
        coursename:"data scitenest",
        price: 199
    },
]

const mycours = cours.reduce((acc,item) => acc+item.price ,0)
console.log(mycours);


  

