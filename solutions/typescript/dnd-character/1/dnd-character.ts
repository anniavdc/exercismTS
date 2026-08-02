const ABILITY_ROLLS = 4;
const DICE_SIDES = 6;
const INITIAL_HITPOINTS = 10;

export class DnDCharacter {
  public strength!: number;
  public dexterity!: number;
  public constitution!: number;
  public intelligence!: number;
  public wisdom!: number;
  public charisma!: number;
  public hitpoints!: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints =
      INITIAL_HITPOINTS + DnDCharacter.getModifierFor(this.constitution);
  }
  
  public static generateAbilityScore(): number {
    const rolls: number[] = [];

    for (let i = 0; i < ABILITY_ROLLS; i++) {
      const diceRoll = Math.floor(Math.random() * DICE_SIDES) + 1;
      rolls.push(diceRoll);
    }

    const highestRolls = rolls.sort((a, b) => a - b).slice(1);
    const abilityScore = highestRolls.reduce((sum, roll) => sum + roll, 0);

    return abilityScore;
  }

  public static getModifierFor(abilityValue: number): number {
    const modifier = Math.floor((abilityValue - INITIAL_HITPOINTS) / 2);
    return modifier;
  }
}
