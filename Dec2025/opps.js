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









