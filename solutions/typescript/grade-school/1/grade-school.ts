export class GradeSchool {
  private _roster: Map<number, Set<string>>;

  constructor() {
    this._roster = new Map();
  }

  roster(): Record<number, string[]> {
    const sortedRoster: Record<number, string[]> = {};

    const sortedGrades = [...this._roster.keys()].sort((a, b) => a - b);

    for (const g of sortedGrades) {
      sortedRoster[g] = this.grade(g);
    }

    return sortedRoster;
  }

  add(name: string, grade: number) {
    for (const [existingGrade, students] of this._roster.entries()) {
      if (students.has(name)) {
        students.delete(name);

        if (students.size === 0) {
          this._roster.delete(existingGrade);
        }
        break;
      }
    }
    if (!this._roster.has(grade)) {
      this._roster.set(grade, new Set());
    }
    this._roster.get(grade)?.add(name);
  }

  grade(grade: number): string[] {
    const students = this._roster.get(grade);
    if (!students) return [];

    return [...students].sort((a, b) => a.localeCompare(b));
  }
}