// for each loop : ye array ka built in function hai

const coding = ["js", "ruby", "java", "python", "cpp"]

//syntax of for each loop : it takes a callback function as input (callback function ka koi name nhi hota and parenthesis ke andar ek parameter hota hai)

// coding.forEach( function (val){
//     console.log(val);
// } )


// we can give this callback function in the form of arrow function

// coding.forEach( (item) => {
//     console.log(item);
// } )



// we can also give an external function

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)         // yha printme function ka reference pass kra h. pura function call nhi kra (printme())







// the function in for each loop has access to many parameters other than item, like index or the whole array 

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )








// accessing elements in array of objects using for each loop

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )






// storing this for each loop in a constant and then seeing if it returns something

const coding2 = ["js", "ruby", "java", "python", "cpp"]


const values = coding2.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);           // we get undefined, for each loop values return nhi krta







