//boolen
let isThisVideoDone: boolean = true;

//number
let myNumber: number = 4;

// text,string
let myName: string = "Nirali";

//template string
let greeting: string = "Hello, " + myName;
let greeting2: string = `Hello, ${myName}`;

//arrays
let count: Array<number> = [1, 2, 3, 4];

// If you don't know the type (watch out for using this! It.s easy to use this a lot, but you'll miss out on type checking!)
let anyThing: any = 4;
anyThing = "some text";
anyThing = false;

//returning nothing
function greeter(name: string) : void {
    console.log("Hello, " + name);
}

//enums
let joystickStatus = 1;
enum Directions{Up, Dowe, Left, Right};

if(joystickStatus === Directions.Left) {
    // move the player to left
}