export{ }
function log(message) {
    console.log(message);
}
var message = 'Hello world!';
log(message);

function doSomthing(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomthing();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];
 
const ColorRed = 0;
const COlorGreen = 1;
const ColorBlue = 2;

enum color {Red, Green, Blue};
let backgroundcolor = color.Blue; 