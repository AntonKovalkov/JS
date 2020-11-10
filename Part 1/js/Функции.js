"use strict";

let num = 10;

function showFirstMessge(text) {
    console.log(text);
    let num = 20;
    console.log(num);
}

showFirstMessge("Hello world");
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(10, 20));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log("hello");
};

logger();


//Стрелочная функция
const calculate = (a, b) => a + b;
console.log(calculate(10, 5));