//JavaScript is dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
//humein btana nhi pdta ki variables declare krte huye ki ye number hai ya boolean hai, but in typescript we need to do this.



//USING SYMBOLS in JS

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)    // Gives false, even tough same number stored hai in dono mein lekin dono associated with unique id



//USING BIGINT IN JS : add n after the big integer

const bigNumber = 64816843518512n






/*
DATATYPES ARE OF TWO TYPES :

1. PRIMITIVE : call by value 
             : they are of 7 types : a) String b)Number c) Boolean d) NULL e) Undefined f) Symbol g) BigInt

  
             
2. NON-PRIMITIVE : call by Reference
                 : a) array b) objects c)functions             
*/



// ARRAY 
const games = ["mario", "gta", "real cricket"];

// OBJECT
let myObj = {
    name : "hitesh",
    age : 22,
}

// FUNCTION
const myFunction = function(){
    console.log("hello world")
}



// STUDY typeof() DIFFERENT DATATYPES FROM THIS DOCUMENTATION
// https://262.ecma-international.org/5.1/#sec-11.4.3