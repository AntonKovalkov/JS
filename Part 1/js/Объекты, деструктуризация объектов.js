"use strict";

const options = {
    name: 'test',
    width: 1024,
    heigt: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

options.makeTest();

// console.log(options.name);

// delete options.name; //Удаляет свойство
// console.log(options);

//Перебор объетов
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }  
}

//Колл-во элементов объекта
let counter = 0;
for (let key in options) {
    counter++;
}
console.log(counter);

console.log(Object.keys(options).length);


//Деструктуризация объектов
const test = {
    name: 'test',
    width: 1024,
    heigt: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

const {border, background} = test.colors;
console.log(border + ' ' + background);