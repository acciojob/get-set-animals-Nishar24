// Animal Class
class Animal {
    constructor(species) {
        this._species = species;
    }
    
    get species() {
        return this._species;
    }
    
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat Class (Inheriting from Animal)
class Cat extends Animal {
    constructor(species) {
        super(species);
    }
    
    purr() {
        console.log("purr");
    }
}

// Dog Class (Inheriting from Animal)
class Dog extends Animal {
    constructor(species) {
        super(species);
    }
    
    bark() {
        console.log("woof");
    }
}

// Example Usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected Output: The Siamese makes a sound
myCat.purr();      // Expected Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected Output: The Golden Retriever makes a sound
myDog.bark();      // Expected Output: woof
