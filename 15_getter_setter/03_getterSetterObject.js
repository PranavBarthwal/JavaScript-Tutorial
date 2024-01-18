// using getter setter before classes were a thing In OBJECTS

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//FACTORY FUNCTION : A factory function in JavaScript is a function that returns an object. It is a pattern for creating objects where you encapsulate the creation logic within a function, and that function is responsible for creating and returning new instances of objects.
const tea = Object.create(User)   // Factory function
console.log(tea.email);      // getter and setter mein hum email ko access kr skte hai chahe vo defined ho ya nhi, like yha hmare paas _email defined h still humne tea.email console.log krwa lia
