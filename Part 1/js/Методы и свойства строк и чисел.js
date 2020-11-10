"use strict";

const str = "teSt";

console.log(str.toUpperCase()); //Верхний регистр, возвращает новую строку, а не изменяет
console.log(str.toLowerCase()); //Нижний регистр
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf('fruit')); //Возвращает индекс начала поисковой строки

const logg = 'Hello world';
console.log(logg.slice(6, 11)); //С 6-й позиции по 11 позицию не включая ее вырезает
console.log(logg.slice(-5, -1)); // Вырезает справа

console.log(logg.substring(6, 11)); 

console.log(logg.substr(6, 5)); //Вместо конца указываем длину, которую надо вырезать


//Числовые методы
const num = 12.8;
console.log(Math.round(num)); //Округление

const test = "12.2px";
console.log(parseInt(test)); //Переводит число в другую систему счисления
console.log(parseFloat(test)); //Возвращает с плавающей точкой