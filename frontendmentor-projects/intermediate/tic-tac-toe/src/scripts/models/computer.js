import { Player } from './player.js';

export class Computer extends Player {
	constructor(char, id, difficulty) {
		super(char, id);
		this.difficulty = difficulty.toLowerCase();
	}

	makeMove(board) {
		let move;
		if (this.difficulty === 'easy') {
			move = this.#makeMoveEasy(board);
		}
		this.boardPositions.add(move);
	}

	#makeMoveEasy(board) {
		let move = Math.ceil(Math.random() * 9);
		while (board.has(move)) {
			move = Math.ceil(Math.random() * 9);
		}
		return move;
	}

	// #makeMoveMedium(board) {

	// }

	// #makeMoveHard(board) {

	// }
}
