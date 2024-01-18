
// In JavaScript, getters and setters are special methods that allow you to define the behavior of accessing and modifying the properties of an object. They are commonly used to encapsulate and control access to an object's properties. Here's how you can create getters and setters in JavaScript:

// Getter:
// A getter is a method that allows you to retrieve the value of a property. It is defined using the get keyword followed by the property name.

// Setter:
// A setter is a method that allows you to set the value of a property. It is defined using the set keyword followed by the property name.



class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()                // humne yha this._email use kra because agar this.email use krre the to vo baar baar get & set ho rha tha humare constructer se bhi and getters and setters se bhi.
    }
    set email(value){
        this._email = value                   
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
    
    // humne getter setter use krke password and email ki value overwrite krdi. setter se humne value set krdi ki kya value store hogi and getter se humne ye define krdia ki agar bahar se koi use access krega to use kya milega.
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);       // we get H@HITESH.AI