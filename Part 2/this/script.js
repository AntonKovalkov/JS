"use strict";


//1) Обычная ф-я: this = window, если use strict = undefined
function showThis(a, b){
    console.log(this); //undefined

    function sum() {
        console.log(this); //undefined
        //return this.a + this.b; - Ошибка
        return a + b;
    }

    console.log(sum());
}

showThis(10, 5);


//2) Методы объектов. Внутри объекта this всегда ссылается на сам объект
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this); //Не относится к объекту
        }
        shout();
    }
};

obj.sum();


//3) Конструкторы. this в конструкторах и классах - новый экземпляр объекта
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function() {
        console.log('Hello');
    };
}



//4) Ручное присваение.
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);


//Создает новую ф-ю и подвязывает контекст: call, apply, bind
function count(num) {
    return this * num;
}

const double = count.bind(2); //2 передается как контекст вместо this
console.log(double(3));



//
const btn = document.querySelector('button');

// btn.addEventListener('click', function() { //Если ф-ю написана в класс-м виде, this - сам элемент
//     console.log(this);
// });

btn.addEventListener('click', () => { //Если ф-ю стрелочная this - родитль, Window
    console.log(this);
});





const object = {
    num: 5,
    sayNumber: function() {
        const say = () => { //У стрелочных ф-й нет контекста вызова, она берет его у родителя
            console.log(this);
        };
        say();
    }
};

object.sayNumber();



const dbl = a => a * 2; //Если ф-я помещается в одну строку, то можно опустить return и {}

console.log(dbl(4));