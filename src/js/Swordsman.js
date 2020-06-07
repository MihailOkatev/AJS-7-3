import { Character } from './Character';

// eslint-disable-next-line import/prefer-default-export
export class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
