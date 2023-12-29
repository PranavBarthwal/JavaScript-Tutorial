// PROTOTYPAL BEHAVIOUR OF JS

//In JavaScript, prototypal behavior refers to how objects inherit properties and methods from other objects. Unlike classical inheritance found in many other programming languages, JavaScript uses prototypal inheritance.

//Prototypes: Every JavaScript object has a prototype. When you access a property or method on an object, JavaScript will look for it directly on that object. If it's not found, it will look at the object's prototype, and if not there, it will continue up the prototype chain until it finds the property/method or reaches the end of the chain (usually Object.prototype).

// eg. array, function and string have thier certain properties, now inka parent is basically object so they have all properties of objects (ab unhe use kr skte h ya nhi ye alag baat h). And object ka parent h NULL.






// Function as an object in js

function mulBy5(num){
    return num*5
}

mulBy5.power = 2            // ab ye dot notation to hum object ke liye use krte hai 

console.log(mulBy5(5))
console.log(mulBy5.power)              // iska output 2 agya i.e. fucntions are also objects. functions are both function and object
console.log(mulBy5.prototype)          // gives {} , ye actually us fucntion ka this (current context) hai




//******************************************************************************************************** 




// adding our own methods in a functions prototype

function createUser(username, score){
    this.username = username
    this.score = score
}


// khudka method bna diya
createUser.prototype.increment = function(){
    this.score++          // ab yha pe this isliye lagaya kyuki usko pta nhi h ki kis user ka score increment krna h. this se pta chl gya ki JIS ne call kiya USS ka score bdha doo
}

createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`)
}


const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)
// bina new keyword lgae y next line mein console log ni hoga kyuki createuser m hmari bnai hue methods inject hi ni hui and new keyword se y inject ho gai

// using our khudke bnaye hue method 
chai.printme()

// bina new keyword lgae y ni chlega kyuki create user m y sb values inject hi ni hui and new keyword se y values inject ho gai




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/









//**********************Prototype************************************* 

// now if we have a string and we want to know its length so we'll use .length property. but if our string has empty spaces so we'll get wrong values so we want to create a method that will give true lenght of th string
// eg : let myName = "hitesh     "
    //  let myChannel = "chaiaurcode     "
    //  console.log(myName.trueLength)





// creating an array
let myHeros = ["thor", "spiderman"]

// creating an object
let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}


// creating our own method in objects's prototype, instead of adding it in myHeros's or heroPower's prototype, bcoz after all they both are array and object (having parent as object), so they can access its properties.

Object.prototype.hitesh = function(){
    console.log(`hitesh is present here`)
}


// checking if this property works for our object
heroPower.hitesh()           // gives hitesh is present here

// checking if this property works for our array 
myHeros.hitesh()             // gives hitesh is present here



// now creating a method in array's prototype and seeing if array and object is able to acces that property

Array.prototype.heyHitesh = function(){
    console.log("hitesh says hello JI")
}

// checking if this property works for our object
//heroPower.heyHitesh()           // throws error, so object cant access arrays property as object is arrays parent

// checking if this property works for our array 
myHeros.heyHitesh()             // gives hitesh says hello JI







//**************************INHERITANCE***************************
//In JavaScript, prototypal inheritance is a fundamental mechanism that enables objects to inherit properties and methods from other objects. This inheritance is established through a chain of prototypes, often referred to as the "prototype chain." Each object has a prototype, and if a property or method is not found in an object, JavaScript looks for it in its prototype, and the search continues up the chain.


const user = {
    name : "hitesh",
    email : "chai@google.com"
}

const teacher = {
    makevideo : true
}
 
const teachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fulltime : true,

    // giving this object all the properties of TeachingSupport Object
    __proto__ : teachingSupport
}

// we can also do this outside the object.
teacher.__proto__ = user             // teacher object ko user object ki properties ka access dediya


// modern syntax of __proto__
Object.setPrototypeOf(teachingSupport, teacher)      // teachingSupport ko teacher ki properties ka access dediaa








// now finally solving this problem
// now if we have a string and we want to know its length so we'll use .length property. but if our string has empty spaces so we'll get wrong values so we want to create a method that will give true lenght of th string
// eg : let myName = "hitesh     "
    //  let myChannel = "chaiaurcode     "
    //  console.log(myName.trueLength)



let newName = "chaiAurCide     "
String.prototype.trueLength = function(){                          // saari string ke prototype mein daaldia ye method
    console.log(this)
    console.log(`True Length of this string is ${this.trim().length}`)

}


newName.trueLength()          // gives True Length of this string is 11


// we can now use it in any string
"jhbjh mndb jhdbmnd kj,m    kcbekc ,mnbnkjce ".trueLength()         // gives True Length of this string is 43


