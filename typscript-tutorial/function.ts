export{ }

function greet(firstName: string, lastName: string = "Patel"): void {
    console.log("Hello, " + firstName + " " + lastName);   
}
greet("Nirali", "Patel");
greet("Nirali")

// arrow function
class Greeter{
    firstname = "Nirali";

    sayHello(){
        setTimeout(() => {
            console.log("Hell0, " + this.firstname);
        },500);
    }
}
let greeter = new Greeter();
greeter.sayHello();