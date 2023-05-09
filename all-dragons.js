const FriendlyDragon = require('./classes/friendly-dragon');
const EvilDragon = require('./classes/evil-dragon')

const falkor = new FriendlyDragon ('Falkor', 'white',
['save Atreyu from the swamp', 'save Atreyu from the Nothing', 'scare the local bullies into a dumpster'],
'Bastian')

console.log(falkor);
falkor.hasLifeGoals();
console.log(falkor.breathesFire());
console.log(falkor.helpsPeople());
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
