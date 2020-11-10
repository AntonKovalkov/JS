"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() { //Не правильная реализация
//     alert('Click');
// };

btn.addEventListener('click', () => { //Добавляем обработчик события. Название, обработчик
    alert('Click');
}); 

btn.addEventListener('click', () => { 
    alert('Second click');
}); 

// btn.addEventListener('mouseenter', (event) => {  //Наведение мышки
//     console.log(event.target); //Показывает элемент на котором сработало событие
//     event.target.remove();
//     console.log('Hover');
// }); 

//let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement); //Удаляет событие
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement); //Всплытие событий


//Отмена стандартных действия браузера
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault(); //Останавливает действия браузера
    console.log(event.target);
});



const buttons = document.querySelectorAll('button');

buttons.forEach(item => {
    item.addEventListener('click', deleteElement);
});