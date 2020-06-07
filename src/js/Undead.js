import { Character } from './Character';

// eslint-disable-next-line import/prefer-default-export
export class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
