"use strict";
exports.__esModule = true;
function log(message) {
    console.log(message);
}
var message = 'Hello world!';
log(message);
function doSomthing() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomthing();
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var COlorGreen = 1;
var ColorBlue = 2;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
var backgroundcolor = color.Blue;
