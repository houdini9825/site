import popup from '../views/popup.js';
import scoreFooter from '../views/scoreFooter.js';
// import header from '../views/header.js';
import gameBoard from '../views/gameboard.js';
import menu from '../views/menu.js';
import * as game from '../models/game.js';
import header from '../views/header.js';
import { checkIfComputerGoesFirst } from '../helpers.js';

function mainHandler(e) {
	e.preventDefault();
	const btn = e.target.closest('.popup-btn');
	if (!btn) return;

	if (btn.classList.contains('quit-btn')) controlQuitBtn();
	else if (btn.classList.contains('next-round-btn')) controlNextRoundBtn();
	else if (btn.classList.contains('cancel-btn')) controlCancelBtn();
	else if (btn.classList.contains('restart-btn')) controlRestartBtn();
}

function controlNextRoundBtn() {
	game.state.restartGame()
	game.state.turnGameOn()
  resetGameBoard()
	checkIfComputerGoesFirst()
}

function controlQuitBtn() {
	game.state.turnGameOff()
	game.state.resetGame()
  gameBoard.hideGame();
	menu.showMenu();
	menu.clearDifficulties()
	menu.clearMenuCharSelection()
  resetGameBoard()
	scoreFooter.resetAllScores();
}

function controlCancelBtn() {
  popup.hidePopup()
}

function controlRestartBtn() {
	game.state.turnGameOn()
	game.state.resetGame()
  resetGameBoard()
  scoreFooter.resetAllScores()
	checkIfComputerGoesFirst()
}

function resetGameBoard() {
  gameBoard.clearAllTiles()
  game.state.clearBoard()
	header.setCurrentTurnImg(game.state.getCurrentActingInfo())
  popup.hidePopup()
}

export default function popupInit() {
	popup.addHandlerPopup(mainHandler);
}
