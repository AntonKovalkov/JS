/*
1) Создать переменную numberOfFilms и внее поместить ответ от пользователя на вопрос: Сколько фильмов вы уже посмотрели&

2)Создать объект personalMovieDB  и в него поместить свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - поместить пустой объект
    - actors - пустой объект
    - genres - пустой массив
    - privat - false


3) Задайте пользователю по два раза вопросы:
    - "Один из последних просмотренных фильмов?"
    - "На сколько оцените его?"
Ответы стоит поместить в отдельные переменные
Записать ответы в объекты movies в формате:
    movies: {
        'logan': 8.1
    }
Проверить, чтобы все работало без ошибок в консоле */

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB.count = numberOfFilms;

const a = prompt('один из последних посмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', ''),
        c = prompt('один из последних посмотренных фильмов?', ''),
        d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = +b;
personalMovieDB.movies[c] = +d;

console.log(personalMovieDB);