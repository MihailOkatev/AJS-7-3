import { Undead } from '../Undead';

test('Активируем powermode', () => {
  const result = new Undead('Yaga');
  result.powerMode = 'On';


  expect(result).toEqual({
    name: 'Yaga',
    type: 'Undead',
    level: 1,
    health: 200,
    attack: 50,
    defence: 50,
    PWMActivated: {
      activated: true,
      countOfPowerAttack: 0,
    },
  });
});

test('Тест счетчика атак', () => {
  const result = new Undead('Yaga');
  result.powerMode = 'On';
  result.simpleAttack();


  expect(result).toEqual({
    name: 'Yaga',
    type: 'Undead',
    level: 1,
    health: 200,
    attack: 50,
    defence: 50,
    PWMActivated: {
      activated: true,
      countOfPowerAttack: 1,
    },
  });
});

test('Пытаемся выключить powerMode раньше положенного', () => {
  const result = function () {
    const character = new Undead('Yaga');
    character.powerMode = 'On';
    character.simpleAttack();
    character.simpleAttack();
    character.powerMode = 'Off';
  };


  expect(result).toThrow();
});

test('Тест корректного выключения PowerMode после трех атак', () => {
  const result = new Undead('Yaga');
  result.powerMode = 'On';
  result.simpleAttack();
  result.simpleAttack();
  result.simpleAttack();


  expect(result).toEqual({
    name: 'Yaga',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
    PWMActivated: {
      activated: false,
      countOfPowerAttack: 3,
    },
  });
});

test('Пытаемся включить powerMode,когда он уже был выключен', () => {
  const result = function () {
    const character = new Undead('Yaga');
    character.powerMode = 'On';
    character.simpleAttack();
    character.simpleAttack();
    character.simpleAttack();
    character.powerMode = 'On';
  };


  expect(result).toThrow();
});
