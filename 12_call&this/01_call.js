function setUsername(username){
    // hypothetical complex DB calls

    this.username = username
    console.log("this fxn is Called")
}

function createUser(username, email, password){

    this.email = email
    this.password =  password


    // instead of directly assigning username we want ki vo kisi aur fucntion mein jakr set ho.
   
    // setUsername(username)
    
    // we get the below output. The function is called but username is not set 
    // this fxn is Called
    // createUser { email: 'chai@goggle.com', password: '123' }


    // to fix this we use call keyword to explicitly call that fucntion, and hold the reference of our function also we pass a parameter 'this' to give current context of our current fxn.
    setUsername.call(this, username)

    // now we get the below output where user name is successfully set
    // this fxn is Called
    // createUser {
    //     email: 'chai@goggle.com',
    //     password: '123',
    //     username: 'chai'
    //   }
}


const chai = new createUser("chai", "chai@goggle.com", "123")
console.log(chai)