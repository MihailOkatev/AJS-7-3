import { Character } from './Character';

// eslint-disable-next-line import/prefer-default-export
export class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
