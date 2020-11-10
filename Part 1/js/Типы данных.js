"use strict"; //Использование строго современного режима

//Простые типы данных, примитивные
//Числовой тип данных
let number = 4.6;
console.log(4/0); //Infinity
console.log('string' * 9); //NaN - not a number

// Строки
const persone = 'Alex'; // Можно использовать '', "", ``

//Bool
const bool = true;

//Null - чего-то не существует
//console.log(something);

//Undefined - что-то существует, но у него нет значения
let und;
console.log(und);


//Комплексные типы данных, объекты
const obj = { //Объект
    name: "John", //Свойства объетов
    age: 25,
    isMarried: false
};

console.log(obj.name);
//console.log(obj["age"]);

//Массив
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
console.log(arr[1]);