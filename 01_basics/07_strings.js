// STRINGS


// NORMAL DECLARATION
// const name = "hitesh"
// const repoCount = 57

// DECLARATION USING STRING CONSTRCUTOR FUNCTION
// const gameName = new String('hiteshhc')




// CONCATENATION OF STRINGS

// Concatenation using normal syntax
// console.log("the github account " + name + " has almost " + repoCount + " repositories")       // Older & bad practice


// Concatenation using string interpolation and making placeholders for variables
// console.log(`the github account ${name} has almost ${repoCount} repositories`)         // modern & best practice





//STRING METHODS

// const gameName = new String('hiteshhc')

// here string is formed as a JS object with key value pairs 
// eg : { 0:"h", 1:"i" , 2:"t", 3:"e", 4:"s", 5:"h", 6:"h", 7:"c"} 
          
// Using string methods

// console.log(gameName[0])              // gives h

// console.log(gameName.length)          // gives 8

// console.log(gameName.toUpperCase())   // gives HITESHHC

// console.log(gameName.charAt(2))       // gives t

// console.log(gameName.indexOf('t'))    // gives 2





// SLICING & SUBSTRING METHOD OF STRING

// const gameName = new String('hitesh-hc')

// const newString = gameName.substring(0, 4)   // ye string ko slice krdega and ismein sirf 0th se lekr 3rd index wale letters aayenge
// console.log(newString)   // gives hite


// const anotherString = gameName.slice(0, 4);
// console.log(anotherString)  //gives hite




// TRIM METHOD

// const string ="     hitesh        "

// console.log(string)            // gives      hitesh        
// console.log(string.trim())     // gives hitesh , removes extra spaces




// REPLACE, INCLUDES & SPLIT METHOD

const gameName = new String('hitesh-hc')
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))   // gives https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh'))    // gives true

console.log(gameName.split('-'))       // gives [ 'hitesh', 'hc' ]