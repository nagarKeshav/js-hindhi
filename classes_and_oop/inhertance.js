class User {
    constructor(username){
     this.username = username
    }
    printme(){
        console.log(`USERNAME is ${this.username}`)
        
    }
}
class teacher  extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`course add by ${this.username}`);
        
    }
}

const chai = new teacher("chai","chai@gmamil.com",123)
console.log(chai);
chai.printme()

const masalaChai = new User("masalaChai")
// console.log(masalaChai);
masalaChai.printme()


console.log(chai instanceof User);