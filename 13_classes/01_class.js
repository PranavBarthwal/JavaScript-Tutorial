// In JavaScript, a class is a blueprint for creating objects. It provides a way to define and create objects with shared properties and methods. Classes were introduced in ECMAScript 6 (ES6) and offer a more convenient and object-oriented syntax compared to the traditional prototype-based inheritance.
// You can also use inheritance in classes by using the 'extends' keyword. 

// In JavaScript classes, the constructor method is a special method that is used for initializing object instances created from the class. It is called automatically when a new object is created from the class. The constructor method allows you to set up initial values for the object's properties and perform any other setup that needs to happen when an object is instantiated.
//You can perform various tasks within the constructor, such as validating input, setting default values, or initializing other objects. The super keyword can also be used in the constructor to call the constructor of the parent class in the case of inheritance.

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene : doing same thing without using class

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());