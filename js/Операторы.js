"use strict"; //Использование строго современного режима

console.log('arr' + " - object");
console.log(4 + " - object");//Если перед строкой поставить +, то она преобразуется в число
console.log(4 + '5');

let incr = 10,
    decr = 10;

incr++; //Инкримент постфиксный, вначале возвращает старое значение, а потом уже его увеличивает
decr--; //Декримент постфиксный
console.log(incr);
console.log(decr);

++incr; //префиксный
--decr; //вначале изменяет, потом возвращает
console.log(incr);
console.log(decr);

incr = 10;
decr = 10;
console.log(incr++);
console.log(--decr);

//Остаток от джеления
console.log(5 % 2);

// = - Присваивание
// == - Равенство
// === Строгое сравнение, по типу данных
console.log(2 * 4 == 8);
console.log(2 * 4 == '8'); //Сравнение по значению
console.log(2 * 4 === '8'); // Сравнение по значению и типу


// && - логическое И
// || - логическое ИЛИ

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);

// ! - Оператор отрицания
// !=, !== - не равен
console.log(isChecked && !isClose);