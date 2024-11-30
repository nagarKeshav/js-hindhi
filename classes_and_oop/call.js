function setusername(username) {
    //comaplex db call
    this.username = username
    console.log("called")

}

function createUser(username,email,password) {
 setusername.call(this,username)
 this.email = email
 this.password = password
}

let person = new createUser("chai","chai@code","1243")
console.log(person);
