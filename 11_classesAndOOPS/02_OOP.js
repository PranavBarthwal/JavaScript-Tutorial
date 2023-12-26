//Object Literal : literally making an object

// const user={
//     username:"aastha",
//     logincount:8,
//     signedin:true,

//     getUserDetails: function(){
//        // console.log("got user details from database");
//        // console.log(`Username : ${this.username}`);           // yha pe this lagakr specify krna hoga ki current context wale username ki baat krre h
//        console.log(this);                                        // this console.log krane se humein ye pura object (or current context) mil jayega
//     }  


// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);       // empty paranthesis aaaega output m({}). as node environment mein global context mein koi current context nhi h. but yhi agar hum browser mein krayenge to humein window return hoga as usmein global context mein window hota h






// Constructor Function : template for creating objects
// its helps to create multiple instances using only 1 object literal/ function

//const promiseone = new Promise()               // here, new is constructor function
//const date= new Date() 

//creating a constructor function
function User(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;

    this.greeting= function(){                       // we can add a method in constructor function also
        console.log(`Welcome ${this.username}`);
    }

    // return this            ye hum likhe ya nhi usse farq nhi pdta as ye implicitly defined hota h.
}

// const userOne = new User("hitesh", 12, true)
// console.log(userOne)

// const userTwo = new User("Chai aur Aastha", 11, false)          // agar new keyword use nhi krte aur is line ke baad userOne consolelog krwate to usmein userTwo ki value overwrite hojati
// console.log(userTwo)


// new Keyword : whenever we use new keyword
// 1) empty object create hga jise instance kehte h
// 2) then ek constructor function call hta h which packs all the arguments
// 3) then this keyword mein inject ho jata h and fucntion mein mil jata h



// console logging kisi instance ka constructor
// console.log(userTwo.constructor);         // output - [function: User]  // it is a refernce of itself


// read about instanceof()

//The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  