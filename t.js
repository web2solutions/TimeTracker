'use strict';

const person = require('person')
    //import person from 'person';

const men = require('men')
    //import men from 'men';



let james = new men('James')
james.walk()
james.speak()


console.log(james)


let ringo = new person('Ringo')
ringo.walk()
ringo.speak()
console.log(ringo.hair)
console.log(ringo.eyes)
console.log(ringo instanceof person)
console.log(ringo)

//person.changeEyes()

let jane = new person('jane')
jane.walk()
jane.speak()
console.log(jane.eyes)
jane.hairColor = 'blue'
console.log(jane.hair)
console.log(jane)