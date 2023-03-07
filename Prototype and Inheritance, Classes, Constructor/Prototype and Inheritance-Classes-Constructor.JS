{
let animal = {};
animal.move = true;

console.log(animal);

let cat = {};
cat.__proto__ = animal;

console.log(cat);
console.log (cat.move);
}


{
class Animal {
    constructor (name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} move`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.pet = true;
    };
    say() {
        console.log(`${this.name} say "meau"`);
    }
}

let cat = new Cat ('Felix');
cat.move()
cat.say()

console.log(cat);

for (let i in cat) {
    console.log(i);
    }
}