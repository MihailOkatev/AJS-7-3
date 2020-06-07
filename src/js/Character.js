// eslint-disable-next-line import/prefer-default-export
export class Character {
  constructor(name) {
    this.name = name;
    this.type = undefined;
    this.level = 1;
    this.health = 100;
    this.defence = 1;
    this.attack = 1;
    this.PWMActivated = {
      activated: false,
      countOfPowerAttack: 0,
    };
  }


  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
    try {
      if (points < 0) {
        throw new Error('урон не может быть отрицательным');
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  levelUp() {
    try {
      if (this.health === 0) {
        throw new Error('Повышение уровня умершего персонажа невозможно');
      }
    } catch (e) {
      throw new Error(e.message);
    }
    this.health = 100;
    this.defence *= 1.2;
    this.attack *= 1.2;
    this.level += 1;
  }

  get powerModeStatus() {
    if (this.PWMActivated.activated === true) {
      return true;
    }
    return false;
  }

  get stats() {
    const { health, attack, defence } = this;
    return { health, attack, defence };
  }


  set powerMode(value) {
    if (value === 'On') {
      if (this.powerModeStatus === false && this.PWMActivated.countOfPowerAttack < 3) {
        this.PWMActivated.activated = true;
        // eslint-disable-next-line guard-for-in
        for (const prop in this.stats) {
          // eslint-disable-next-line operator-assignment
          this[prop] = this[prop] * 2;
        }
      } else {
        throw new Error('powerMode уже был активирован');
      }
    } else if (value === 'Off') {
      if (this.PWMActivated.countOfPowerAttack > 0 && this.PWMActivated.countOfPowerAttack < 3) {
        throw new Error('Невозможно выключить Усилннный режим раньше трех ходов');
      }
      // eslint-disable-next-line guard-for-in
      for (const prop in this.stats) {
        // eslint-disable-next-line operator-assignment
        this[prop] /= 2;
      }
      this.PWMActivated.activated = false;
    }

    // eslint-disable-next-line max-len
  }

  // eslint-disable-next-line max-len
  // метод simpleAttack - это заглушака, в условиях задачи не описано, как происходит атака, но нам нужно их считать,
  // чтобы понять, когда выключить powerMode
  simpleAttack() {
    console.log('Мы атаковали');
    if (this.powerModeStatus) {
      this.PWMActivated.countOfPowerAttack += 1;
    }
    if (this.PWMActivated.countOfPowerAttack === 3) {
      this.powerMode = 'Off';
    }
  }
}
