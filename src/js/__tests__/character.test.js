// import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../character';

// describe('Validation data', () => {
//   const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

//   test('should create a character with valid types', () => {
//     validTypes.forEach(type => {
//       const character = new Bowman('John');
//       expect(character.name).toBe('John');
//       expect(character.type).toBe(type);
//       expect(character.health).toBe(100);
//       expect(character.level).toBe(1);
//     });
//   });

//   test('invalid name: too short', () => {
//     expect(() => new Bowman('A')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
//   });

//   test('invalid name: too long', () => {
//     expect(() => new Bowman('David Backham')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
//   });

//   test('invalid type', () => {
//     expect(() => new Bowman('Alice', 'Warrior')).toThrowError('Такого типа не существует');
//   });

//   test('empty name', () => {
//     expect(() => new Bowman('', 'Swordsman')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
//   });
// });

// import { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../character';

// describe('Character class', () => {
//   test('should create a character with valid types', () => {
//     const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
//     types.forEach(type => {
//       const character = new Character('John', type);
//       expect(character.name).toBe('John');
//       expect(character.type).toBe(type);
//       expect(character.health).toBe(100);
//       expect(character.level).toBe(1);
//     });
//   });

//   test('invalid name: too short', () => {
//     expect(() => new Character('A', 'Bowman')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
//   });

//   test('invalid name: too long', () => {
//     expect(() => new Character('David Backham', 'Bowman')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
//   });

//   test('invalid type', () => {
//     expect(() => new Character('Alice', 'Warrior')).toThrowError('Такого типа не существует');
//   });

//   test('empty name', () => {
//     expect(() => new Character('', 'Swordsman')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
//   });
// });

// describe('Bowman class', () => {
//     test('should create a Bowman character with correct properties', () => {
//       const bowman = new Bowman('Legolas');
//       expect(bowman.name).toBe('Legolas');
//       expect(bowman.type).toBe('Bowman');
//       expect(bowman.health).toBe(100);
//       expect(bowman.level).toBe(1);
//       expect(bowman.attack).toBe(25);
//       expect(bowman.defence).toBe(25);
//     });
  
//     test('invalid name: too short', () => {
//       expect(() => Bowman ('A')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
//     });
  
//     test('invalid name: too long', () => {
//       expect(() => Bowman ('David Backham')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
//     });
//   });

// describe('Bowman class', () => {
//   test('should create a Bowman character with correct properties', () => {
//     const bowman = new Bowman('Legolas');
//     expect(bowman.name).toBe('Legolas');
//     expect(bowman.type).toBe('Bowman');
//     expect(bowman.health).toBe(100);
//     expect(bowman.level).toBe(1);
//     expect(bowman.attack).toBe(25);
//     expect(bowman.defence).toBe(25);
//   });
// });

// describe('Swordsman class', () => {
//   test('should create a Swordsman character with correct properties', () => {
//     const swordsman = new Swordsman('Arthur');
//     expect(swordsman.name).toBe('Arthur');
//     expect(swordsman.type).toBe('Swordsman');
//     expect(swordsman.health).toBe(100);
//     expect(swordsman.level).toBe(1);
//     expect(swordsman.attack).toBe(40);
//     expect(swordsman.defence).toBe(10);
//   });
// });

// describe('Magician class', () => {
//   test('should create a Magician character with correct properties', () => {
//     const magician = new Magician('Gandalf');
//     expect(magician.name).toBe('Gandalf');
//     expect(magician.type).toBe('Magician');
//     expect(magician.health).toBe(100);
//     expect(magician.level).toBe(1);
//     expect(magician.attack).toBe(10);
//     expect(magician.defence).toBe(40);
//   });
// });

// describe('Undead class', () => {
//   test('should create an Undead character with correct properties', () => {
//     const undead = new Undead('Sauron');
//     expect(undead.name).toBe('Sauron');
//     expect(undead.type).toBe('Undead');
//     expect(undead.health).toBe(100);
//     expect(undead.level).toBe(1);
//     expect(undead.attack).toBe(25);
//     expect(undead.defence).toBe(25);
//   });
// });

// describe('Zombie class', () => {
//   test('should create a Zombie character with correct properties', () => {
//     const zombie = new Zombie('Zombie Guy');
//     expect(zombie.name).toBe('Zombie Guy');
//     expect(zombie.type).toBe('Zombie');
//     expect(zombie.health).toBe(100);
//     expect(zombie.level).toBe(1);
//     expect(zombie.attack).toBe(40);
//     expect(zombie.defence).toBe(10);
//   });
// });

// describe('Daemon class', () => {
//   test('should create a Daemon character with correct properties', () => {
//     const daemon = new Daemon('Evil Spirit');
//     expect(daemon.name).toBe('Evil Spirit');
//     expect(daemon.type).toBe('Daemon');
//     expect(daemon.health).toBe(100);
//     expect(daemon.level).toBe(1);
//     expect(daemon.attack).toBe(10);
//     expect(daemon.defence).toBe(40);
//   });
// });


import { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../character';

describe('Character class', () => {
  test('should create a character with valid types', () => {
    const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    types.forEach(type => {
      const character = new Character('John', type);
      expect(character.name).toBe('John');
      expect(character.type).toBe(type);
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
    });
  });

  test('invalid name: too short', () => {
    expect(() => new Character('A', 'Bowman')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
  });

  test('invalid name: too long', () => {
    expect(() => new Character('David Backham', 'Bowman')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
  });

  test('invalid type', () => {
    expect(() => new Character('Alice', 'Warrior')).toThrowError('Такого типа не существует');
  });

  test('empty name', () => {
    expect(() => new Character('', 'Swordsman')).toThrowError('Название должно состоять из больше 2 и меньше 10 символов');
  });
});

describe('Bowman class', () => {
  test('should create a Bowman character with correct properties', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});

describe('Swordsman class', () => {
  test('should create a Swordsman character with correct properties', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.name).toBe('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});

describe('Magician class', () => {
  test('should create a Magician character with correct properties', () => {
    const magician = new Magician('Gandalf');
    expect(magician.name).toBe('Gandalf');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});

describe('Undead class', () => {
  test('should create an Undead character with correct properties', () => {
    const undead = new Undead('Sauron');
    expect(undead.name).toBe('Sauron');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});

describe('Zombie class', () => {
  test('should create a Zombie character with correct properties', () => {
    const zombie = new Zombie('Zombie Guy');
    expect(zombie.name).toBe('Zombie Guy');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});

describe('Daemon class', () => {
  test('should create a Daemon character with correct properties', () => {
    const daemon = new Daemon('Evil Spir');
    expect(daemon.name).toBe('Evil Spir');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});
