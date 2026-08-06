export class Clock {
  private hour: number;
  private minute: number;

  constructor(hour: number, minute?: number) {
    this.hour = hour || 0;
    this.minute = minute || 0;
  }

  private formatNumberToString(number: number): string {
    return number.toString().padStart(2, "0");
  }

  public toString(): string {
    const totalMinutes = this.hour * 60 + this.minute;
    const normalizedMinutes = ((totalMinutes % 60) + 60) % 60;
    const normalizedHours = ((Math.floor(totalMinutes / 60) % 24) + 24) % 24;

    return `${this.formatNumberToString(normalizedHours)}:${this.formatNumberToString(normalizedMinutes)}`;
  }

  public plus(minutes: number): Clock {
    this.minute += minutes;
    return new Clock(this.hour, this.minute);
  }

  public minus(minutes: number): Clock {
    this.minute -= minutes;
    return new Clock(this.hour, this.minute);
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}