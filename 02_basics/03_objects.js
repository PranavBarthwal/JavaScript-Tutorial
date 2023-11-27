// JAVASCRIPT OBJECTS

// they can be declared through literals or through constructors


// CONSTRUCTOR METHOD
// SINGLETON : one of its kind, formed when created through constructor
//object.create



// LITERALS METHOD : creates non singleton object


const mySym = Symbol("key1")

const user = {
    name : "hitesh",
    age : 19,
    "employee Id" : "GOOGLEDEL5746",                   // this type of element cannot be accessed through user.employee Id method
    location : "jaipur",
    isLoggedIn : false,
    email : "hitesh@gmail.com",
    lastLoginDays : ["monday" , "saturday"],
    [mySym] : "mykey10",
}

// ACCESSING ELEMENTS OF OBJECT

// 1st Method
// console.log(user.email)
// console.log(user.age)
// console.log(user.employee Id)                  // gives error

// 2nd Method
// console.log(user["email"])
// console.log(user["age"])
// console.log(user["employee Id"])
//console.log(user[mySym])

// typeof this mySym
//console.log(typeof user[mySym])                 
//gives string, normally agar hum symbol ko use kre object mein to vo as a symbol nhi blki as a string store hota hai. therefore we have a specific syntax for using symbols in objects. [mySym] = "myKey10"



// changing object values
// user.name = "durgesh"

// Object.freeze(user)                    // is object ko freeze krdia, ab ismein changes nhi honge

// user.name = "shwetabh"                 // ye name change nhi hoga

// console.log(user)



// Creating a function

user.greeting = function(){
    console.log(`hello User, ${this.name}`)
}

console.log(user.greeting)                // gives [Function (anonymous)]

console.log(user.greeting())             // gives hello user, Hitesh & undefined









