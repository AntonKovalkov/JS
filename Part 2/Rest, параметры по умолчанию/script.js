"use strict";

const log = function(a, b, ...rest) { //... - rest оператор, значит неограниченное еол=во аргументов = массив
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');


function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);