"use strict";

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));



const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

const john = {
    health: 100
};

//Утсаревший формат наследования от протоипов
john.__proto__ = soldier;
john.sayHello();

//
Object.setPrototypeOf(john, soldier); //Утанавливает объекту указанный прототип
const andrew = Object.create(soldier); // Создает новый объект
andrew.sayHello();