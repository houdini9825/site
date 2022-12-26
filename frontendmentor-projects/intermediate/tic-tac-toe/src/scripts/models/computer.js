import { Player } from './player.js';

const solutions = {
	1: [
		[2, 3],
		[4, 7],
		[5, 9],
	],
	2: [
		[1, 3],
		[5, 8],
	],
	3: [
		[1, 2],
		[5, 7],
		[6, 9],
	],
	4: [
		[1, 7],
		[5, 6],
	],
	5: [
		[1, 9],
		[2, 8],
		[3, 7],
		[4, 6],
	],
	6: [
		[3, 9],
		[4, 5],
	],
	7: [
		[1, 4],
		[8, 9],
		[3, 5],
	],
	8: [
		[2, 5],
		[7, 9],
	],
	9: [
		[1, 5],
		[3, 6],
		[7, 8],
	],
};

export class Computer extends Player {

	constructor(char, id, difficulty) {
		super(char, id);
		this.difficulty = difficulty.toLowerCase();
	}

	makeMove(board) {
		let move;
		if (this.difficulty === 'easy') move = this.#makeMoveEasy(board);
		

		else if (this.difficulty === 'medium') move = this.#makeMoveMedium(board)

		this.boardPositions.add(move);
		return move;
	}

	#makeMoveEasy(board) {
		let move = Math.ceil(Math.random() * 9);
		while (board.has(move)) {
			move = Math.ceil(Math.random() * 9);
		}
		return move;
	}

	#makeMoveMedium(board) {
		const possibleMoves = new Set();
		const oppMoves = new Set();
		for (let i = 1; i <= 9; i++) {
			if (!board.has(i)) possibleMoves.add(i);
			else if (!this.boardPositions.has(i) && board.has(i)) oppMoves.add(i);
		}

		return this.#mediumAlg(possibleMoves, oppMoves, board);
	}

	#mediumAlg(possibleMoves, oppMoves, board) {
		if (possibleMoves.size === 1) return [...possibleMoves][0];

		const checkCanWin = this.#checkIfCanWin(possibleMoves)

		if (checkCanWin) return checkCanWin

		const checkOppWin = this.#checkIfOpponentGoingToWin(possibleMoves, oppMoves)
		return checkOppWin ? checkOppWin : this.#makeMoveEasy(board)
	}

	#checkIfCanWin(possibleMoves) {
		let move;

		for (const tile of possibleMoves.values()) {
			if (move) break;
			for (const lst of solutions[tile]) {
				if (this.boardPositions.has(lst[0]) && this.boardPositions.has(lst[1])) {
					move = tile;
					break;
				}
			}
		}
		return Number(move);
	}

	#checkIfOpponentGoingToWin(possibleMoves, oppMoves) {

		let move;

		for (const tile in solutions) {
			if (move) break;
			for (const lst of solutions[tile]) {
				if (oppMoves.has(lst[0]) && oppMoves.has(lst[1]) && possibleMoves.has(Number(tile))) {
					move = tile;
					break;
				}
			}
		}

		return Number(move);
	}
}
