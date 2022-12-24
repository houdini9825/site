import { Player } from './player.js';

export class Computer extends Player {
	constructor(char) {
		super(char);
	}

	makeMove(board) {
		let move = Math.ceil(Math.random() * 9);
		while (board.has(move)) {
			move = Math.ceil(Math.random() * 9);
		}
		this.boardPositions.add(move)
    return move
	}
}

