/* eslint-disable no-undef */
import Swordsman from "../class/Swordsman";

test("testing Swordsman", () => {
    const result = new Swordsman('swordsman');
    const expected = {
        name: 'swordsman',
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(result).toEqual(expected);
});
