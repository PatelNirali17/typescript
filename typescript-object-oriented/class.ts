export{ }

class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    walk(distance: number) {
        console.log("Hi, my name is " + this.name + " and I'm walking " + distance + " meter");
        
    }
}

let myAnimal = new Animal("Dave");
myAnimal.walk(10);

class Snake extends Animal {
    constructor(theName: string) {
        super(theName);
    }
    walk() {
        console.log("Snake don't really walk");
        
    }
}
let Snakes = new Snake("Dave");
Snakes.walk(); 