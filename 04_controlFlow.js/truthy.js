// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");               // ye wali statement execute hogi, empty array treated as truthy

// } else {
//     console.log("Don't have user email");               
// }



// const userEmail = ""

// if (userEmail) {
//     console.log("Got user email");                
// } else {
//     console.log("Don't have user email");         // ye wali statement execute hogi, empty string treated as falsy  
// }



// //*****************************************************************************

// // falsy values : jinhe by default false assume kiya jata h

// // false, 0, -0, BigInt 0n, "", null, undefined, NaN



// //truthy values : jinhe by default true assume kiya jata h

// // "0", 'false', " ", [], {}, function(){} // empty function



// checking if array is empty

// const userArr = []

// if (userArr.length === 0) {
//     console.log("Array is empty");
// }


// checking if object is empty

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {                // Object.keys(emptyObj) returns it as array then we check its length
    console.log("Object is empty");
}



//*************************************************************************************

// // Nullish Coalescing Operator (??): The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10                         // console log krne pe we get 5
// val1 = null ?? 10                      // console log krne pe we get 10
// val1 = undefined ?? 15                 // console log krne pe we get 15
val1 = null ?? 10 ?? 20                   // console log krne pe we get 10 , left side mein null hai to right side mein jo bhi pehli value milegi vo return hoga


console.log(val1);





// // Terniary Operator

// // condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")