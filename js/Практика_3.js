"use strict";

/*

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит false - 
выводит в консоль шлавный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
`Ваш любимый жанр под номером ${номер по порядку}`. Каждый ответ записывается в массив данных genres

*/

let numberOfFilms;

function start() { //isNaN - если не число возвращает true
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { 
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('один из последних посмотренных фильмов?', '');
        let b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = +b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    switch (true) {
        case personalMovieDB.count < 10:
            console.log("Просмотренно довольно мало фильмов ");
            break;
        case personalMovieDB.count <= 30:
            console.log("Вы классический зритель");
            break;
        case personalMovieDB.count > 31:
            console.log("Вы киноман!");
            break;
        default:
            console.log("Произошла ошибка");
            break;
    }
}
detectPersonalLevel();

//2
function showMyDB(hidden) {
    if  (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

//3
function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();
console.log(personalMovieDB);