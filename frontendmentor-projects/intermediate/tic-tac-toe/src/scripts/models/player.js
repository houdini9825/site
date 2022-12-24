


export class Player {

  constructor(char, id) {
    this.char = char;
    this.score = 0;
    this.id = id
    this.boardPositions = new Set();
  }

  makeMove(move) {
    this.boardPositions.add(move)
    return move
  }

}