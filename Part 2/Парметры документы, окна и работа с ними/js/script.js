'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth; //Width с padding но без, margin
// const height = box.clientHeight;

// const width = box.offsetWidth; //Со всеми отсупами и бордерами, видимая часть
// const height = box.offsetHeight;

const width = box.scrollWidth; //Размер всего прокручиваемого контента
const height = box.scrollHeight;

console.log(width);
console.log(height);


btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';

    console.log(box.scrollTop); //Показывает сколько контента уже отлистали
});


console.log(box.getBoundingClientRect()); //Показывает все координаты элемента
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box); //Возвращает стили примененнын к элементу, идут из css
console.log(style.display);


console.log(document.documentElement.scrollTop); //Можно модифицировать