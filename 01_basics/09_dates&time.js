// DATES IN JAVASCRIPT

// MDN DOCS FOR FUTURE REFERENCE 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


//CREATING NEW DATE OBJECT USING DATE CONSTRUCTOR FUNCTION

// let  myDate = new Date()

//DIFFERENT FORMATS 

// console.log(myDate);                             //not readable , gives 2023-11-26T07:00:58.157Z

// console.log(myDate.toString())                   //readable, gives Sun Nov 26 2023 07:00:58 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString())               // readable, gives Sun Nov 26 2023

// console.log(myDate.toISOString())                // not readable, gives 2023-11-26T07:00:58.157Z

// console.log(myDate.toJSON())                     // not readable, gives 2023-11-26T07:00:58.157Z

// console.log(myDate.toLocaleString())             // readable, gives 11/26/2023, 7:04:22 AM

// console.log(myDate.toLocaleDateString())         // readable, gives 11/26/2023


// TYPE OF DATE
// console.log(typeof myDate)                       // Date is an object which was created using date constructor fucntion



// CREATING A SPECIFIC DATE
