"use strict";

//To String
//1)
console.log(typeof(String(22)));

//2) Конконтенация
console.log(typeof(5 + "Hello"));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';





//To Number
//1)
console.log(typeof(Number('55')));

//2)Унарный плюс
console.log(typeof(+'5'));


//3)
console.log(typeof(parseInt('44px', 10)));


let answer = +prompt('Hello', '');




//To Bool
//false: 0, '', null, undefiend, NaN
//1)
let swicther = null;

if (swicther) {
    console.log('Working');
}

swicther = 1;
if (swicther) {
    console.log('Working');
}


//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'444'));