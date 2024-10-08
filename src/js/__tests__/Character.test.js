/* eslint-disable no-undef */
import Character from "../class/Character";

describe("Character class", () => {
    test("should throw error if name is too short", () => {
        expect(() => new Character("A", "Bowerman")).toThrow("Имя персонажа должно быть не менее 2 и не более 10");
    });

    test("should throw error if name is too long", () => {
        expect(() => new Character("A very long name", "Bowerman")).toThrow("Имя персонажа должно быть не менее 2 и не более 10");
    });

    test("should throw error if type is invalid", () => {
        expect(() => new Character("ValidName", "InvalidType")).toThrow("Неверно введен тип персонажа, выберите одно из значений: Bowerman, Zombie, Daemon, Magician, Swordsman, Undead");
    });
});
