'use strict';

import person from 'scripts/person.js';

export default class women extends person {
  constructor(name) {
  	super(name);
    this.gender = 'female';
    this.clothes = 'pink';
  }
}

