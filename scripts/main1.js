import person from 'scripts/person.js';
import men from 'scripts/men.js';
import women from 'scripts/women.js';

let james = new men('James');
james.walk();
james.speak();

let maria = new women('Maria');
maria.walk();
maria.speak();
maria.hairColor = 'blonde';

console.log(maria.hair);
console.log(maria.gender);
console.log(maria.eyes);
console.log(maria instanceof person);
console.log(maria instanceof women);


// call class static method
person.changeEyes();

let ringo = new person('Ringo');

ringo.walk();
ringo.speak();

console.log(ringo.hair);
//console.log(  ringo.gender );
console.log(ringo.eyes);
console.log(ringo instanceof person);


person.changeEyes();
console.log(ringo.eyes);