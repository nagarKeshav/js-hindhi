// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptedpassword(){
//         return `${this.password}abc`
//     }
//     userUppercase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai =  new User("chai","chai@gmail.com",123)
// console.log(chai.encryptedpassword());
// console.log(chai.userUppercase());


// BHIND THE SEEN

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptedpasssword = function () {
    return `${this.password}abc`
}

const chai   = new User("chai","chai@gmail.com",123);
console.log(chai.encryptedpasssword());
