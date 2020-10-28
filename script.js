"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hellow World");
console.log(num);

function calc(a, b) {
    return(a + b);
}

console.log(calc(4, 3));
console.log(calc(8, 1));
console.log(calc(0, 2));