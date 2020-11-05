"use strict"; //Использование строго современного режима

//alert('Hello'); //Всплывающее окно с текстом и кнопкой ОК



//Вопрос пользователю с ДА и НЕТ
// const result = confirm('Are you here?');
// console.log(result);

//Получение конкретного овтета от пользователя
// const answer = prompt('Вам есть 18?', '18'); //Вопрос, placeholder
// console.log(answer + 5);


const answers = [];
answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилмя?,', '');
answers[2] = prompt('Сколько Вам лет?', '');

document.write(answers);