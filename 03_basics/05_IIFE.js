// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) : used when we want to execute our function immediately, or we want to prevent pollution from global scope

// SYNTAX
//()();     // first parenthesis mein fucntion declare, second parenthesis mein fucntion is called just like chai() bss ismein humne chai ko phele hi () mein daal diya. ismein semicolon zruri hai


// named IIFE
(function Chai(){
    console.log(`db connected`)
})();


//***************************************using arrow function with IIFE*************************************************

((DBname) => {
    console.log(`${DBname} db connected`)
})('mongoDB');