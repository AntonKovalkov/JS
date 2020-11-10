/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


//1
const promo = document.querySelectorAll('.promo__adv img');

promo.forEach(item => {
    item.remove();
});

//2
const genre = document.querySelector('.promo__genre');
genre.textContent = "ДРАМА";

//3
const promoContent = document.querySelector('.promo__bg');
promoContent.style.backgroundImage = 'url("img/bg.jpg")';

//4
const interaciveList = document.querySelector('.promo__interactive-list');

interaciveList.innerHTML = "";
movieDB.movies.sort();

// for (let i = 0; i < movieDB.movies.length; i++) {
//     const li = document.createElement('li');
//     li.classList.add('promo__interactive-item');
//     li.textContent = `${i + 1}. ${movieDB.movies[i]}`;
//     interaciveList.append(li);
// }

movieDB.movies.forEach((film, index) => {
    interaciveList.innerHTML += `
        <li class="promo__interactive-item">${index + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});