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