"use strict";

if (8 == 9) {
    console.log('Ok');
} else {
    console.log('Not OK!');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}


//Тернарный оператор
(num === 50) ? console.log('OK') : console.log('Error');


//switch
const number = 510;
switch (number) {
    case 49: 
        console.log('Неверно');
        break;
    case 100:
            console.log('Много');
            break;
    case 50: 
        console.log('Ok');
        break;
    default:
        console.log('Увы');
        break;
}