"use strict";

let a = 5,
    b = a;

a = 10;

console.log(a);
console.log(b);




const obj = {
    a: 5,
    b: 1
};
const newObj = obj; // Передает ссылку на объект

newObj.a = 10;
console.log(newObj);
console.log(obj);


//Создание копий ссылочных типов
function copy(mainObj) {
    let objCopy = {};
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key]; //Поверхностная копия
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 100; //Для копирования необходимо использовать глубокую копию
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add)); //Объединяет два объекта в один - независимая поверхностная копия
const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);


//Копия массива
const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[1] = 'afafsdfsdf';

console.log(newArr);
console.log(oldArr);


//Оператор разворота Spread
const video = ['Youtube', 'Vimeo', 'Rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);


const array = ['a', 'b'];
const newArray = [...array];

const q = {
    one: 1,
     two: 2
};

const newQ = {...q};