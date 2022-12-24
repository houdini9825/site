import {Player} from './player.js';
import {Computer} from './computer.js';

export let state;

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

  makeMove(move) {
    if (this.currentActing.id === 'Computer') this.#computerMakeMove()
    else this.#playerMakeMove(move)
  }

  #playerMakeMove(move) {
    this.currentActing.makeMove(move)
    this.#updateBoard()
    this.#changeActing()
  }

  #computerMakeMove() {
    this.currentActing.makeMove(this.board)
    this.#updateBoard()
    this.#changeActing()
  }

  getCurrentActingInfo() {
    return this.currentActing.getInfo()
  }
}



export function playerVsComputer(char) {
  char2 = char === 'x' ? 'o' : 'x';
  const player1 = new Player(char, 'Player 1')
  const computer = new Computer(char2, 'Computer', 'easy')
  state = new TicTacToe(player1, computer)
}

export function playerVsplayer(char) {
  char2 = char === 'x' ? 'o' : 'x';
  const player1 = new Player(char, 'Player 1')
  const player2 = new Player(char2, 'Player 2')
  state = new TicTacToe(player1, player2, false)
}