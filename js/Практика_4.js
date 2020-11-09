"use strict";

/*
1) Переписать его так, чтобы все функции стали методами объекта personalMoviewDB

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство private. Если false - он переключает 
его в true и наоборот, протестировать с showMuBD

3) В методен writeYourGenres запретить пользователь нажать кнопку "отмена" или оставлять пустую строку
Если он это сделал - возвращать его к этому же вопросу.
После того как все жанры введены - при помощи forEach вывести в консоль сообщение в таком видке:
"Любимый жанр (номер по порядку начиная с 1) - это (название из массива)"
*/

const personalMovieDB = {
    count: 0,
    movies:{},
    actors: {},
    genres: [],
    privat: false,

    getCount: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { 
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('один из последних посмотренных фильмов?', '');
            let b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = +b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
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
    },

    showMyDB: function (hidden) {
        if  (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre != null && genre != '') {
            //     personalMovieDB.genres.push(genre);
            // } else {
            //     i--;
            // }

            let genres = prompt(`Введите Ваши любимые жанры черех запятую`).toLowerCase();
            if (genres === '' || genres == null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
            }
        }
        personalMovieDB.genres.sort();
        personalMovieDB.genres.forEach((value, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${value}`);
        });
    },
};
personalMovieDB.writeYourGenres();