"use strict";

let num = 50;

//while

while (num <= 55) {
    console.log(num);
    num++;
}
console.log('==============');

//do-while
num = 50;
do {
    console.log(num);
    num++; 
} while (num <= 55);
console.log('==============');

//for
num = 50;
for (let i = num; i <= 55; i++) {
    console.log(num);
    num = i;
}
console.log('==============');

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}
console.log('==============');

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}
console.log('==============');