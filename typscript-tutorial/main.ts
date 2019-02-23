export { }
let message = "Welcome back";
console.log(message);


// variable declartion

let x = 10;
const y = 20;

let sum;
const title = "code";


// variable type
let tiBeginner: boolean = true;
let total: number = 0;
let name: string = 'Nirali';

let sentence: string = `My name is ${name}
I am a bignner in typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Nirali', 22];

enum Color { Red = 5, Green, Blue };

let c: Color = Color.Green;
console.log(c);

let randomvalue: any = 10;
randomvalue = true;
randomvalue = 'Nirali';

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

// function
function add(num1: number, num2?: number): number {

    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);

function add1(num1: number, num2: number = 20): number {

    if (num2)
        return num1 + num2;                           // default
    else
        return num1;
}
add(5, 10);
add(5);

// interface
interface person {
    firstName: string;
    lastName: string;
}
function fullName(person: person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'Nirali',
    lastName: 'Patel'
};
fullName(p);

// class & access modifiers
class employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`);
    }
}
let emp1 = new employee('Nirali');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`manager delegatin task`);
        
    }
}
let m1 = new Manager('Swati');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
