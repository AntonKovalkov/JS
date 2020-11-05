"use strict"; //Использование строго современного режима

const category = 'toys';
console.log('https://someurl.com/' + category + '/' + '4'); //Конкантенация строк, страй формат
console.log(`https://someurl.com/${category}/5`); //Интерполяция, необходимо использовать косые ковычки `

let user = 'Anton';
alert(`Hello, ${user}`);