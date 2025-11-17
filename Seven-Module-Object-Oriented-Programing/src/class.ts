
class Animal {
    name : string;
    spices : string;
    sound : string

    constructor(name : string, spices : string, sound : string){
        this.name = name;
        this.spices = spices;
        this.sound = sound
    }

    makeSound(){
        console.log(`${this.name} is making sound like ${this.sound}`)
    }
}

const dog = new Animal("don", "Dog", "Ghew Ghew")
const cat = new Animal("mon", "Cat", "Meaw Meaw")


console.log(dog.makeSound())