import popup from '../views/popup.js';
import scoreFooter from '../views/scoreFooter.js';
import header from '../views/header.js';
import gameBoard from '../views/gameboard.js';
import menu from '../views/menu.js';
import { checkIfComputerGoesFirst } from '../helpers.js';
import * as game from '../models/game.js';

function controlMenuNewGameBtn(e) {
  e.preventDefault()
  const btn = e.target.closest('.new-game-btn')
  if (!btn) return

  if (!menu.checkIfDifficultySelected() || !menu.checkIfCharSelected()) return menu.showErrorMessage()

  game.playerVsComputer(menu.getSelection(), menu.getDifficulty())

  header.setCurrentTurnImg(game.state.getCurrentActingInfo())
  scoreFooter.setLabel(game.state.player1.getInfo())
  scoreFooter.setLabel(game.state.player2.getInfo())
  game.state.turnGameOn()
  menu.closeErrorMessage()
  menu.hideMenu()
  gameBoard.showGame()
  checkIfComputerGoesFirst()
}

function controlMenuCharSelection(e) {
  e.preventDefault()
  const btn = e.target.closest('.main-menu-char-btn')
  if (btn) menu.changeCharChoice(btn)
}

function controlDifficultySelection(e) {
  e.preventDefault()
  if (!e.target.classList.contains('difficulty-choice')) return

  menu.clearDifficulties()
  e.target.classList.add('selected-difficulty')
}

function controlErrorMessage(e) {
  e.preventDefault()
  if (!e.target.closest('.close-error')) return

  menu.closeErrorMessage()
}

export default function init() {
  menu.addHandlerChangeChar(controlMenuCharSelection)
  menu.addHandlerNewGame(controlMenuNewGameBtn)
  menu.addHandlerSelectDifficulty(controlDifficultySelection)
  menu.addHandlerCloseErrorMessage(controlErrorMessage)
}

