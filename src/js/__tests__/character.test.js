import { Character } from '../character';

describe('Validation data', () => {
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
        expect(() => new Character('A', 'Bowman')).toThrow(Error('Название должно состоять из больше 2 и меньше 10 символов'));
    });

    test('invalid name: too long', () => {
        expect(() => new Character('David Backham', 'Bowman')).toThrow(Error('Название должно состоять из больше 2 и меньше 10 символов'));
    });

    test('invalid type', () => {
        expect(() => new Character('Alice', 'Warrior')).toThrow(Error('Такого типа не существует'));
    });

    test('empty name', () => {
        expect(() => new Character('', 'Swordsman')).toThrow(Error('Название должно состоять из больше 2 и меньше 10 символов'));
    });

    test('empty name', () => {
        expect(() => new Character('', 'Swordsman')).toThrow(Error('Название должно состоять из больше 2 и меньше 10 символов'));
    });

});
