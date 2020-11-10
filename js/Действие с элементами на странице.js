"use strict";

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


//Перебор псевдомассиова
// for (let i = 0; i < circles.length; i++) {
//     circles[i].style.backgroundColor = 'yellow';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

//Создание элементов
const div = document.createElement('div');
const text = document.createTextNode('Hello world'); //Создание текстового нода

div.classList.add('black'); //Подключение класса css к элементу

//document.body.append(div); //Добапвляет элемент на странциу по отношению к body в конец
wrapper.append(div); 

//wrapper.prepend(div); //Добавляет в начало

// hearts[0].before(div); //Добавляет перед указанным элементом
// hearts[0].after(div); //После указанного

// circles[0].remove(); //Удаляет указанный элемент


//hearts[0].replaceWith(circles[0]); //Заменяте один элемент на другой



//Устаревшие команды
//wrapper.appendChild(div);

//wrapper.insertBefore(div, hearts[1]);

//wrapper.removeChild(hearts[1]);

//wrapper.replaceChild(circles[0], hearts[0]);


//Редактирование
div.innerHTML = '<h1>Hello World</h1>'; //Добавляет HTML струутуру в элемент

//div.textContent = 'Hello World'; //Добавялет текст

div.insertAdjacentHTML('afterend', '<h2>Anton</h2>'); //Втсавка HTML кода beforebegin - перед элементом, 
//afterbegin - в начало, beforeend - перед концом, afterend - после элемеента

