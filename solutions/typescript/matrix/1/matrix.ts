export class Matrix {
  private matrixString: string;
  private matrix: number[][];

  constructor(matrixString: string) {
    this.matrixString = matrixString;
    this.matrix = this.getMatrixFromString();
  }

  private getMatrixFromString(): number[][] {
    return this.matrixString
      .trim()
      .split("\n")
      .map((row) => row.trim().split(/\s+/).map(Number));
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    const columnsAsRows = this.matrix[0].map((_, colIndex) =>
      this.matrix.map((row) => row[colIndex]),
    );
    return columnsAsRows;
  }
}

