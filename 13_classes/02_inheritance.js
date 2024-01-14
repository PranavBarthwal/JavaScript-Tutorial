// In JavaScript, a class is a blueprint for creating objects. It provides a way to define and create objects with shared properties and methods. Classes were introduced in ECMAScript 6 (ES6) and offer a more convenient and object-oriented syntax compared to the traditional prototype-based inheritance.
// You can also use inheritance in classes by using the 'extends' keyword. 

// In JavaScript classes, the constructor method is a special method that is used for initializing object instances created from the class. It is called automatically when a new object is created from the class. The constructor method allows you to set up initial values for the object's properties and perform any other setup that needs to happen when an object is instantiated.
//You can perform various tasks within the constructor, such as validating input, setting default values, or initializing other objects. The super keyword can also be used in the constructor to call the constructor of the parent class in the case of inheritance.

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)              // ye super keyword sara kaam krdega automatically jo bhi humne call & this keyword use krke explicitly krwaya tha. Humne jis function pe extend kiya hoga (here USer) usko ye execution context pass krdega and humara kaam hojayega
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai instanceof User);      // gives true. checks if chai is instanceof User. agar chai === user krenge to false dega as vo sirf user ka instance hai, uske equal nhi h.