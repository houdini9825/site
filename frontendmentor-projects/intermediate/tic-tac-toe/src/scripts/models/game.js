import {Player} from './player.js';
import {Computer} from './computer.js';

class TicTacToe {
	constructor(player1, player2, vsComputer=true) {
		this.player1 = player1;
		this.player2 = player2;
    this.currentActing = this.player1;
    this.vsComputer = vsComputer;
    this.board = new Set();
	}

  clearBoard() {
    this.board.clear()
    for (const player of [this.player1, this.player2]) {
      player.boardPositions.clear()
    }
  }

  #changeActing() {
    this.currentActing === this.player1 ? this.currentActing = this.player2 : this.currentActing = this.player1;
  }

  #updateBoard() {
    for (const player of [this.player1, this.player2]) {
      player.boardPositions.forEach(pos => this.board.add(pos))
    }
  }

  checkIfWon(player) {
    const winningVals = [[1,2,3], [1,4,7], [1,5,9], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9]]

    for (const positions of winningVals) {
      if (positions.every(pos => player.boardPositions.has(pos))) {
        return true
      }
    }
    return false
  }
}



export function playerVsComputer() {
  const player1 = new Player('x', 'Player 1')
  const computer = new Computer('o', 'Computer')
  return new TicTacToe(player1, computer)
}

export function playerVsplayer() {
  const player1 = new Player('x', 'Player 1')
  const player2 = new Player('o', 'Player 2')
  return new TicTacToe(player1, player2, false)
}