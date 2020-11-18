"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 33);
console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

User.prototype.exit = function() { //Добавление нового функционала
    console.log(`User ${this.name} loggout`);
};

ivan.exit();


class NewUser {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }

    hello() {
        console.log(`Hello ${this.name}`);
    }

    exit() {
        console.log(`User ${this.name} loggout`);
    }
}

const anton = new NewUser('Anton', 32);
anton.hello();