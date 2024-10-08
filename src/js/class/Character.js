const MIN_LENGTH = 2;
const MAX_LENGTH = 10;
const TYPES = [
  "Bowerman",
  "Zombie",
  "Daemon",
  "Magician",
  "Swordsman",
  "Undead",
];

export default class Character {
  constructor(name, type) {
    if (name.length < MIN_LENGTH || name.length > MAX_LENGTH) {
      throw new Error(
        `Имя персонажа должно быть не менее ${MIN_LENGTH} и не более ${MAX_LENGTH}`
      );
    }

    if (!TYPES.includes(type)) {
      throw new Error(
        `Неверно введен тип персонажа, выберите одно из значений: ${TYPES.join(", ")}`
      );
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
