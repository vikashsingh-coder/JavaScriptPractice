const arr1 = [1, 2, 3, 4, 5, 6]
console.log(arr1)


// ---------- prototype inhritance
const user = {
    login() {
        console.log("User logged in")
    },
    logout() {
        console.log("User logged out")
    }
}

const admin = {
    deleted() {
        console.log("User deleted")
    }
}

//  We inharit the user object
admin.__proto__ = user





// ---------- Constructor function + prototype

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`)
}

Person.prototype.sayBye = function () {
    console.log(`Bye ${this.name}`)
}

const p1 = new Person("vikash")




// class component inheritance
class Animal {
    constructor(name) {
        this.name = name
    }

    intro() {
        console.log("I am " + this.name)
    }
}

class Dog extends Animal {
    speak() {
        console.log("BOW BOW BOW...")
    }
}

const dog1 = new Dog("tommy")


// JavaScript does not have true classical inheritance.
// It uses prototype-based inheritance, and ES6 classes are just syntactic sugar over prototypes.

// __proto__ vs prototype

const arr = []
console.log(arr.__proto__ === Array.prototype) // true | array inharit form Array fucnction


function User() { }

User.prototype.login = function () {
    console.log("user logged in")
}

const u1 = new User();
console.log(u1.__proto__ === User.prototype) // true | u1 inharit from User function

// prototype used for function property
// __proto__ shows object inharitance point

// proto type chaning A => B => C => D

function A() { }
A.prototype.a = function () {
    console.log("a is getting called")
}


function B() { }
B.prototype = Object.create(A.prototype) // inharit all prototype of A

const b = new B()

// first look for a method in b object, then in B prototype, then in A prototype
b.a();   // found in A.prototype  // a is getting called


// Another example

const obj = { name: "vikash" };

obj.toString(); // first look in obj, if not found go to object prototype


const animal = {
    eat() {
        console.log("Eating")
    }
}

const dog = Object.create(animal)

dog.bark = function () {
    console.log("bow bow bow")
}

dog




















