"use strict";
const btns = document.querySelectorAll('button');

//console.log(btns[0].classList.length); //Колличество классов у элемента
//console.log(btns[0].classList.item(1)); //Позволяет получить класс под определенным индексом
//console.log(btns[1].classList.add('red')); //Добавляет классы
//console.log(btns[0].classList.remove('blue')); //Удаляет класс
//console.log(btns[0].classList.toggle('blue')); //Если класс есть на элементе - удалит, если нет - добавит


// if (btns[1].classList.contains('red')) {
//     console.log('red');
// } //Проверка на наличие класса

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});


//className - устарело
console.log(btns[0].className);


//Делегирование
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') { //event.target.matches('button.red')-совпадение по всем св-м
        console.log('button');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);