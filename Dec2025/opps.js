// const arr1 = [1, 2, 3, 4, 5, 6]



// // ---------- prototype inhritance
// const user = {
//     something: "vikash",
//     login() {
//         console.log("User logged in")
//     },
//     logout() {
//         console.log("User logged out")
//     }
// }

// const admin = {
//     deleted() {
//         console.log("User deleted")
//     }
// }

// //  We inharit the user object
// admin.__proto__ = user


// admin.deleted()
// admin.login()
// admin.logout()
// console.log(admin.something)



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


console.log(p1.name)
p1.sayHello()
p1.sayBye()


// class component inheritance
// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     intro() {
//         console.log("I am " + this.name)
//     }
// }

// class Dog extends Animal {

//     speak() {
//         console.log("BOW BOW BOW...")
//     }
// }

// const dog1 = new Dog("tommy")
// dog1.speak()
// dog1.intro()
// console.log(dog1.name)





// // JavaScript does not have true classical inheritance.
// // It uses prototype-based inheritance, and ES6 classes are just syntactic sugar over prototypes.

//  __proto__ vs prototype
// __proto__ is hte the referecne to its inheritance Object
// prototype is the property of function, which allow to add prototype to a contructure function

// const arr = []
// console.log(arr.__proto__ === Array.prototype) // true | array inharit from Array function

// User is a constructor function
// function User() { }

// User.prototype.login = function () {
//     console.log("user logged in")
// }

// const u1 = new User();
// console.log(u1.__proto__ === User.prototype) // true | u1 inharit from User function

// // prototype used for function property
// // __proto__ shows object inharitance point

// // proto type chaning A => B => C => D

// function A() { }
// A.prototype.a = function () {
//     console.log("a is getting called")
// }


// function B() { }
// B.prototype = Object.create(A.prototype) // inharit all prototype of A

// const b = new B()

// // first look for a method in b object, then in B prototype, then in A prototype
// b.a();   // found in A.prototype  // a is getting called


// // Another example

// const obj = { name: "vikash" };

// obj.toString(); // first look in obj, if not found go to object prototype


// const animal = {
//     eat() {
//         console.log("Eating")
//     }
// }

// const dog = Object.create(animal)

// dog.bark = function () {
//     console.log("bow bow bow")
// }

// // eating come from animal and bark comr form dog
// dog.eat()
// dog.bark()

// //  behind the scean  dog.__proto__ === animal

// // 4. function constructor inheritance (old school)

// function Parent(name) {
//     this.name = name;
// }

// Parent.prototype.sayHi = function () {
//     console.log("Hi " + this.name)
// }

// function Child(name, age) {
//     Parent.call(this, name) // copy properties equivalent of super in class
//     this.age = age
// }

// // inherit methods
// Child.prototype = Object.create(Parent.prototype) // should inherit from Parent.prototype, not Parent
// Child.prototype.constructor = Child

// const c = new Child('Vikash', 28)

// c.sayHi()


// // 5. ES6 class prototype inheritance
// class NewA {
//     bar() {
//         console.log("this is bar method")
//     }
// }
// class NewB extends NewA {
//     foo() {
//         console.log("this is a foo method")
//     }
// }

// console.log("NewB.prototype.__proto__ ", NewB.prototype.__proto__) // {}
// console.log("NewA.prototype ", NewA.prototype) // {}

// console.log(NewB.prototype.__proto__ === NewA.prototype)



//  this + prototype (most important), "this" can only be defined in parenet.

// function User(name) {
//     this.name
// }

// User.prototype.sayHi = function () {
//     console.log("Hi, nice to meet you " + this.name)
// }

// const user1 = new User("vikash")
// const user2 = new User("rajat")

// same function different this, since each time we create different object
// user1.sayHi()
// user2.sayHi()


// 5. __proto__ vs Object.setPrototypeOf

// // Avoid
// obj.__proto__ = parent

// // Use this  
// Object.setPrototypeOf(obj, parent)
// UserFunction.prototype.login = function () { }

// Virtual model: obj => constructor.prototype => Object.prototype => null
// Example 1 

const parent = {
    greet() {
        console.log("Gretting coming fom Parents")
    }
};

const obj = {}
Object.setPrototypeOf(obj, parent)  // set prototype of obj as parent
obj.greet()

// in classes

class Parent {
    gretting() {
        console.log("Gretting from Parent")
    }
}

class Child extends Parent { }

// Internally  Object.setPrototypeOf(Child.prototype, Parent.prototype)
// Object.create(proto)	Creates a new object with proto as prototype
// Object.setPrototypeOf(obj, proto)	Changes prototype of an existing object
// Object.setPrototypeOf is slow because it changes an object’s internal structure.

const a = Object.create(parent)
const b = {}
Object.setPrototypeOf(b, parent)




































