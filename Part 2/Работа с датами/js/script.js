"use strict";

let now = new Date();

// Геттеры
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); //Возвращает день недели. Отсчет начинается с воскресенья

// console.log(now.getUTCHours());
// console.log(now.getHours());

// console.log(now.getTimezoneOffset()); //Разница между часовым и UTC в минутах
// console.log(now.getTime()); //Колл-во милисекунд которые уже прошли

//Сетеры
// console.log(now.setHours(18));
// console.log(now);
// и тд

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i **3; //Возведение в степень
}
let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);