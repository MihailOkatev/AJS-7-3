import { Character } from './Character';

// eslint-disable-next-line import/prefer-default-export
export class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
