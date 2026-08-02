const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const takenNames = new Set<string>();

export class Robot {
  private _name!: string;

  constructor() {
    this.resetName();
  }

  private generateRandomLetter(): string {
    return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }

  private generateRandomNumber(): string {
    return Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
  }

  private generateRandomName(): string {
    const letter1 = this.generateRandomLetter();
    const letter2 = this.generateRandomLetter();
    const numberAsString = this.generateRandomNumber();

    return `${letter1}${letter2}${numberAsString}`;
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    let newName: string;

    do {
      newName = this.generateRandomName();
    } while (takenNames.has(newName));

    takenNames.add(newName);
    this._name = newName;
  }

  public static releaseNames(): void {
    takenNames.clear();
  }
}
