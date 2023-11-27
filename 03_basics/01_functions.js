// Declaring a function

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName                     // fucntion ka Reference

// sayMyName()                   // function ka execution, gives the whole name in new lines



//*****************************************************************************************************************************************************************************








// function addTwoNumbers(number1, number2){                      // here number1 & number2 are parameters

//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5)                                              // here 3 & 5 are arguments, we get 8

// storing the result in a variable
// const result = addTwoNumbers(5,11)     
// console.log(result)                        
// ismein value 8 honi chahiye thi lekin we get undefined. this happens because the fucntion does not returns any value that can be stored in the variable result instead it just console logs the value



// solving the above problem
// function subtractTwoNumbers(number1, number2){                      // here number1 & number2 are parameters

//     const result =(number1 - number2);
//     return result
// }

// const result2 = subtractTwoNumbers(19,7)
// console.log(result2)                                                 // here we stored the value that the fucntion returned and it works fine



//**********************************************************************************************************************************






function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Manglooo"))                        // gives Manglooo just logged in

console.log(loginUserMessage(""))                                // gives  just logged in

console.log(loginUserMessage())                                  // (no arguments passed) gives undefined just logged in 



// if no arguments are passed then we can pass a default value to the parameter

function loginUserMessage2(username = "Default User"){                      // we gave default value of the parameter username as "Default User"
    return `${username} just logged in`
}

console.log(loginUserMessage2());                     // gives Default User just logged in
