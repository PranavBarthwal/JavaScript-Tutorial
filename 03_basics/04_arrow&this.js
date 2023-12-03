// this keyword : used to refer to current context

const user ={
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`)          // here this is used to refer to the current context. this.username refers to the current value of the username

        console.log(this)           // Gives the whole object as output with the current context. i.e. iska current context is in this object


    }    
}

// console.log(this)              // current context is empty, gives {} , as in node environment there is no global context, but if we do this in browser environment we get window. i.e. in browser, window is the global context



//user.welcomeMessage() 
/*
gives hitesh , welcome to the website
{
    username: 'hitesh',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}
*/


//user.username = "Sam"                  // we changes the current context of username to sam
//user.welcomeMessage()                  // gives Sam , welcome to the website
 


//***********************************************************************************************************************************************************************

// normal fucntion : mein this nhi use ho pa rha
// function chai(){
//     let username = "hitesh"
//     console.log(this)                              // gives bhot saari values   
//     console.log(this.username)                     // gives undefined, as functions mein this use nhi ho paa rha
// }

// chai()


// Const mein held fucntion mein bhi this use nhi ho paa rha
// function coffee(){
//     let username = "hitesh"
//     console.log(this)                              // gives bhot saari values   
//     console.log(this.username)                     // gives undefined, as functions mein this use nhi ho paa rha
// }

// coffee()


// arrow fucntion mein bhi this use nhi ho pa rha
// const biscuit = () => {
//     let usernmae = "hitesh"
//     console.log(this)                               // gives {}
//     console.log(this.username)                      // gives undefined
// }

// biscuit()




//*******************************************************ARROW FUNCTION***************************************************************************************

// Basic Syntax
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4))



// OTHER WAYS OF CREATING ARROW FUCNTION

// const add1 = (num1) => (num1+1)               // ismein return likhne ki zrurat nhi h
// console.log(add1(3))


// returning object in arrow function
const user1 = (num1) => ({username:"hitesh"})               
console.log(user1(3))                   // gives {username:"hitesh"}
 