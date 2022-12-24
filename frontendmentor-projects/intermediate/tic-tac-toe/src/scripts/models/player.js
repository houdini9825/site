


export class Player {

  constructor(char, id) {
    this.char = char;
    this.score = 0;
    this.id = id
    this.boardPositions = new Set();
  }

  getInfo() {
    return {score: this.score, id: this.id, char: this.char}
  }

  makeMove(move) {
    this.boardPositions.add(move)
    return move
  }

}