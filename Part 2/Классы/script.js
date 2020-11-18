"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10),
      long = new Rectangle(20, 100);
console.log(long.calcArea());
console.log(square.calcArea());


class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, bgColor, text) {
        super(height, width); //Вызов родительского конструктора
        this.bgColor = bgColor;
        this.text = text;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(20, 30, 'blue', 'Hello world');

console.log(div.calcArea());
div.showMyProps();