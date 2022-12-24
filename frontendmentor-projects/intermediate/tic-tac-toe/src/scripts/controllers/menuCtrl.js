import popup from '../views/popup.js';
import scoreFooter from '../views/scoreFooter.js';
import header from '../views/header.js';
import gameBoard from '../views/gameboard.js';
import menu from '../views/menu.js';
import * as game from '../models/game.js';

function controlMenuNewGameBtn(e) {
  e.preventDefault()
  const btn = e.target.closest('.new-game-btn')
  if (!btn) return

  if (btn.classList.contains('new-game-vs-pc-button')) {
    game.playerVsComputer(menu.selection)
  }

  else if (btn.classList.contains('new-game-vs-player-button')) {
    game.playerVsplayer(menu.selection)
  }

  menu.hideMenu()
  gameBoard.showGame()
}

function controlMenuCharSelection(e) {
  e.preventDefault()
  const btn = e.target.closest('.main-menu-char-btn')
  if (btn) menu.changeCharChoice(btn)
}

export default function init() {
  menu.addHandlerChangeChar(controlMenuCharSelection)
  menu.addHandlerNewGame(controlMenuNewGameBtn)
}

