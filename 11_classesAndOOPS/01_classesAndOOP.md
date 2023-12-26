# javascript and classes
Yes, JavaScript does have classes. However, it's important to note that JavaScript's class system is syntactic sugar over its PROTOTYPE-BASED inheritance model. Classes were introduced in ECMAScript 6 (ES6), providing a more familiar syntax for developers who come from class-based languages like Java or C++.


## OOP : Object Oriented Programming 
- it is a programming paradigm, which means what structure we have of writing code


## Object
- collection of properties and methods
- toLowerCase

## why use OOP
- to avoid spaghetti code

## parts of OOP
Object literal : literally making an object

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
- Abstraction 
Definition: Abstraction is the process of simplifying complex systems by modeling classes based on the essential properties and behaviors relevant to the problem you are solving. It involves hiding the complex reality while exposing only the necessary and relevant aspects.
Example: In a car, you don't need to understand every intricate detail of how the engine works to drive it. The car's interface (steering wheel, pedals, etc.) provides an abstraction, allowing you to interact without knowing the internal complexities.

- Encapsulation
Definition: Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit or class. It restricts direct access to some of an object's components and can prevent unintended interference and misuse.
Example: In a class representing a bank account, encapsulation ensures that the account balance is private and can only be accessed or modified through specified methods, such as deposit and withdraw.

- Inheritance
Definition: Inheritance is a mechanism that allows a new class (subclass or derived class) to inherit attributes and behaviors from an existing class (superclass or base class). It promotes code reuse and establishes a relationship between classes.
Example: If you have a class Vehicle, you can create subclasses like Car and Motorcycle that inherit common attributes and methods from the Vehicle class. This reduces redundancy and makes the code more modular.

- Polymorphism
Definition: Polymorphism means "many forms" and allows objects of different types to be treated as objects of a common type. It enables a single interface to represent different types of objects, and it can take various forms, such as method overloading and method overriding.
Example: In a programming language that supports polymorphism, you could have a method called calculateArea that works for both circles and rectangles. The method signature is the same, but the implementation varies depending on the type of object it operates on.