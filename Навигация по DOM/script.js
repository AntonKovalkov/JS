"use strict";

// console.log(document.body); //тег body
// console.log(document.documentElement); //тег html

//console.log(document.body.childNodes); //Дети body

// console.log(document.body.firstChild); //Первый элемент
// console.log(document.body.lastChild); //Последний элемент


// console.log(document.querySelector('#current').parentNode.parentNode); //Родительский узел для данного элемента

// console.log(document.querySelector('[data-current="3"]').nextSibling);//Следующий сосед, узел
// console.log(document.querySelector('[data-current="3"]').previousSibling);//Предыдущий сосед, узел

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);//Следующий элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);//Предыдущий элемент


for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}