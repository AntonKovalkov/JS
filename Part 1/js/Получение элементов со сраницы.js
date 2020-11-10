"use strict";

const box = document.getElementById('box');

const buttons = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart'); //По css селектору
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //Берет только первый элемент данного селектора