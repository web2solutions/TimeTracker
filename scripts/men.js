'use strict';

import person from 'scripts/person.js';

export default class men extends person {
  constructor(name) {
  	super(name);
    this.gender = 'male';
    this.clothes = 'blue';
  }
}


window.men = men