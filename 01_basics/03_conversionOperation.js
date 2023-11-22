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


// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);              // gives 33
// console.log(typeof (stringNumber))      // gives string, therefore successfully converted








//  **************************************** OPERATIONS IN JS ********************************************************


// let value = 3
// let negValue = -value
// console.log(negValue)    // gives us -3


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)   // 2^3
// console.log(9%4)    // modulo operator : gives remainder



//CONCATENATION OF STRINGS

// let str1 = "hello "
// let str2 = "hitesh"

// let str3 = str1 + str2;
// console.log(str1 + str2)    // concatenates both strings and returns hello hitesh




// now agar addition mein first hmara string hai to ye aage wale ko bhi string maanta hai and dono ko concatenate krdeta hai
// agar pehle numbers ho and then string ho tb ye pehle numbers ko evaluate krdega and then concatenate

// first string then number
// console.log("1" + 2)         // will give 12

// first number then string
// console.log(1 + "2")         //will give 12

// first string then numbers
// console.log("1"+2+2)         //will give 122

// first numbers then string
// console.log(1+2+"2")         //will give 32






// console.log(true)
// console.log(+true)    //will convert boolean to number and give 1

// console.log(false)
// console.log(+false)   //will convert boolean to number and return 0

// console.log("")     //empty string means false in boolean
// console.log(+"")    //and ye us false ko number mein convert krdega and will return 0






//pre increment and post increment


//pre increment mein pejle value increment hoti h then use hoti hai & post increment mein pehle value use hojati hai then increment hoti hai
let x=3;
const y = x++;    // pehle y mein 3 value chli gyi hogi then baadmein x ki value bdh gyi 

console.log(x,y)    // we get 4 3


let a = 3; 
const b = ++a;    // pehle a ki vlaue bdh gyi then vo b mein store hua

console.log(a,b)  // we get 4 4



