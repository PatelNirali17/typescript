"use strict";
exports.__esModule = true;
function greet(firstName, lastName) {
    if (lastName === void 0) { lastName = "Patel"; }
    console.log("Hello, " + firstName + " " + lastName);
}
greet("Nirali", "Patel");
greet("Nirali");
// arrow function
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.firstname = "Nirali";
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hell0, " + _this.firstname);
        }, 500);
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.sayHello();
