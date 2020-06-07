// TODO: write your code here
import { Undead } from './Undead';

const a = new Undead('Zergul');
a.damage(10);
a.levelUp();
console.log(a);
a.powerMode = 'On';
const b = { ...a };
console.log(b);
a.simpleAttack();
a.simpleAttack();
a.simpleAttack();
console.log(a);
a.powerMode = 'On';
