//BASIC COMPARISIONS

// console.log(2 > 1);     // true
// console.log(2 >= 1);    // true
// console.log(2 < 1);     // false
// console.log(2 == 1);    // false
// console.log(2 != 1);    // true


// COMPARISIONS OF DIFFERENT DATATYPES GIVES UNEXPECTED VALUES 

// console.log("2" > 1);    // gives true
// console.log("02" > 1);   // gives true 

//console.log(null > 0);   // gives false
//console.log(null == 0);  // gives false
//console.log(null >= 0);  // gives true
// sare cases mein false aaya lekin last wale case mein true aaya this is because the equality check (==) and comparisions (> < >= <=) work differently. comparisions convert null to a number, treating it as 0.




// STRICT CHECK (===) : also checks if datatypes is equal or not

console.log("2" === 2);     // gives false even tough they have same value as they have different datatype
