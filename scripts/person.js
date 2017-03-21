'use strict';

export default class person {
    constructor(name) {
        this.eyes = 2;
        this.ears = 2;
        this.arms = 2;
        this.foot = 2;
        this.name = name;
        this.hair = 'black';
    }

    speak() {
        console.log(this.name + " is speaking .... ");
    }

    walk() {
        console.log(this.name + " is walking .... ");
        //element.textContent += this.name + " is walking .... <br> ";
    }

    // set property
    set hairColor(color) {
        this.hair = color;
    }

    static changeEyes() {
        this.eyes = 1;
        return this.eyes;
    }
}