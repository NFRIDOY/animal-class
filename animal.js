class Animal {
    constructor(name = "Animal", age) {
        this.name = name
        this.age = age
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age)
    }
    sayBark() {
        console.log(this.name, "says Bark Bark!!")
    }
}

class Puppy extends Dog {
    constructor(name, age = 2) {
        if (age <= 2) {
            super(name, age) // its creates runtime error
        }
    }
}

const cow = new Animal("cow")

console.log(cow?.name)

const dog = new Dog("tommy", 10)

const puppy = new Puppy("pup") 

console.log(dog.name, dog.age)

dog.sayBark()
puppy.sayBark()


