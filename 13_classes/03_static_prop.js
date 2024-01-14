// In JavaScript, a class is a blueprint for creating objects. It provides a way to define and create objects with shared properties and methods. Classes were introduced in ECMAScript 6 (ES6) and offer a more convenient and object-oriented syntax compared to the traditional prototype-based inheritance.
// You can also use inheritance in classes by using the 'extends' keyword. 

// In JavaScript classes, the constructor method is a special method that is used for initializing object instances created from the class. It is called automatically when a new object is created from the class. The constructor method allows you to set up initial values for the object's properties and perform any other setup that needs to happen when an object is instantiated.
//You can perform various tasks within the constructor, such as validating input, setting default values, or initializing other objects. The super keyword can also be used in the constructor to call the constructor of the parent class in the case of inheritance.

//In JavaScript, the static keyword is used to define static methods or properties for a class. Static methods or properties are associated with the class itself, rather than with instances of the class. They are accessed using the class name, not an instance of the class. Static methods are often used for utility functions or operations that don't depend on specific instance data.
//Static methods cannot access instance-specific data or other instance methods because they are not bound to a particular instance of the class. They are called on the class itself and do not have access to the this keyword inside the method.
// in short static properties are those properties jinka access hum un sb objects ko nhi dena chahte jo is class se instantiate hua h

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())         // will throw error as static prop ko access krne ki try krra h

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());          // will throw error as inherited class wale ko bhi acess nhi krne de rha static keyword