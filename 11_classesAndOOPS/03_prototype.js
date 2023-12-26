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
console.log(mulBy5.power)              // iska output 2 agya i.e. fucntions are also objects
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
