"use strict";

const arr = [1, 2, 3, 6 ,8];

console.log(arr.length);
arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.pop(); //Удаляет последний элемент из массива
console.log(arr);

arr.push(10); //Добавляет элемент в конец массива
console.log(arr);

arr.unshift(0); //Добавляет в начала массива
console.log(arr);

arr.shift(); //Удаялет первый элемент массива
console.log(arr);



//Перебор массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const arr2 = [1, 2, 3, 6 ,8];
for (let value of arr2) {
    console.log(value);
}

arr2.forEach(function(item, i, arr2) { //function callback применяется с каждым элементом массива
    console.log(`${i}: ${item} внутри массива ${arr2}`);
});


//split, join, sort
const str = prompt('',"");
const products = str.split(', '); //Преобразует строку в массив с указаннм разделиетелем
console.log(products);

console.log(products.join('; ')); // Преобразует массив в строку


let asd = [12, 14, 1, 0, 9]; 
asd.sort(); //Сортирует массив как строки
console.log(asd);

function compareNum(a, b) {
    return a - b;
}
asd.sort(compareNum); //Сортирует как числа
console.log(asd);


//Псевдомассивы - структура совпадает с массивом, но у них нет никаких методов массивов