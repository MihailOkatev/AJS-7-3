import { Character } from './Character';

// eslint-disable-next-line import/prefer-default-export
export class Bowerman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}
