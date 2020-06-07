import { Character } from './Character';

// eslint-disable-next-line import/prefer-default-export
export class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
