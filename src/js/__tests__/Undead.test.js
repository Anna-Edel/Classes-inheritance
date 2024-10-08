/* eslint-disable no-undef */
import Undead from "../class/Undead";

test("testing Undead", () => {
    const result = new Undead('undead');
    const expected = {
        name: 'undead',
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(result).toEqual(expected);
});
