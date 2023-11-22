// CONVERSION TO NUMBER

// let score = "33"

// console.log(typeof score);
// console.log(typeof (score));    // both are valid ways of writing typeof

// let valueInNumber = Number(score)    // using Number(), emphaisis on capital N, we can make sure that the string no is converted into a number 
// console.log(typeof valueInNumber)    // we get number
// console.log(valueInNumber)           // we get 33





// let score2 = "33abc"

// let valueInNumber2 = Number(score2)    // using Number(), emphaisis on capital N, we can make sure that the string no is converted into a number 
// console.log(typeof valueInNumber2)    // we get number
// console.log(valueInNumber2)           // we get NaN






// let score3 = null

// let valueInNumber3 = Number(score3) 
// console.log(typeof valueInNumber3)         // we get number
// console.log(valueInNumber3)                // we get 0 (null is converted into 0 by using Number())





// let score5 = undefined

// let valueInNumber5 = Number(score5) 
// console.log(typeof valueInNumber5)         // we get number
// console.log(valueInNumber5)                // we get Nan





// let score6 = true

// let valueInNumber6 = Number(score6) 
// console.log(typeof valueInNumber6)         // we get number
// console.log(valueInNumber6)                // we get 1 (true gets converted to 1 by using Number())






//CONVERSION TO BOOLEAN


// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)       //converts number to boolean
// console.log(booleanIsLoggedIn)                    // we will get true



// let isLoggedIn2 = 0

// let booleanIsLoggedIn2 = Boolean(isLoggedIn2)       //converts number to boolean
// console.log(booleanIsLoggedIn2)                     // we will get false



// let isLoggedIn3 = ""

// let booleanIsLoggedIn3 = Boolean(isLoggedIn3)       //converts empty string to boolean
// console.log(booleanIsLoggedIn3)                     // we will get false



// let isLoggedIn4 = "hitesh"

// let booleanIsLoggedIn4 = Boolean(isLoggedIn4)       //converts string to boolean
// console.log(booleanIsLoggedIn4)                     // we will get true







// CONVERSION TO STRING


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);              // gives 33
console.log(typeof (stringNumber))      // gives string, therefore successfully converted



