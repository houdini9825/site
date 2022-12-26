import popup from '../views/popup.js';
import scoreFooter from '../views/scoreFooter.js';
import header from '../views/header.js';
import gameBoard from '../views/gameboard.js';
import menu from '../views/menu.js';
import * as game from '../models/game.js'
import { COMPUTER_DELAY } from '../config.js';

export function computerTurn() {

  setTimeout(function() {const move = game.state.computerMakeMove()

    const computerInfo = game.state.getCurrentActingInfo()
  
    const tile = gameBoard.getTile(move)
  
    gameBoard.addCharToTile(tile, computerInfo.char)
  
    if (!checkWin()) changePlayer()
    checkTie()}, COMPUTER_DELAY)
}

function playerTurn(tile) {
  const activePlayer = game.state.getCurrentActingInfo()

  const tileSelection = Number(tile.id.slice(-1))

  gameBoard.addCharToTile(tile, activePlayer.char)

  game.state.playerMakeMove(tileSelection)

  if (!checkWin()) changePlayer()
  

  checkTie()
}

function changePlayer() {
  game.state.changeActing()

  header.setCurrentTurnImg(game.state.getCurrentActingInfo())
}

function checkWin() {
  if (game.state.checkIfWon()) {
    const winnerData = game.state.getCurrentActingInfo()
    popup.renderWinPopup(winnerData)
    popup.showPopup()
    scoreFooter.changeScore(winnerData)
    game.state.turnGameOff()
    return true
  }
  return false
}

function checkTie() {
  if (game.state.checkIfBoardFull() && !game.state.checkIfWon()) {
    game.state.ties++
    popup.renderTiePopup()
    popup.showPopup()

    const data = {char: 'tie', score: game.state.ties}

    scoreFooter.changeScore(data)
  }
}

function controlTileClick(e) {
  const tile = e.target.closest('.active-game-tile')
  if (!tile || tile.classList.contains('selected-tile') || game.state.currentActing.id !== 'You') return

  if (game.state.checkIfGameOn() && !game.state.checkIfBoardFull()) playerTurn(tile)
  if (game.state.checkIfGameOn() && !game.state.checkIfBoardFull()) computerTurn()

}

function controlTileHover(e) {
  e.preventDefault()
  const tile = e.target.closest('.active-game-tile')
  if (!tile || tile.innerHTML || game.state.getCurrentActingInfo().id === 'CPU') return

  const activePlayer = game.state.getCurrentActingInfo()

  gameBoard.hoverTile(tile, activePlayer.char)

  gameBoard.addHandlerTileHoverRemoval(tile, controlTileHoverOut)
}

function controlTileHoverOut(e) {
  e.preventDefault()
  const tile = e.target
  if (tile.classList.contains('selected-tile')) return

  gameBoard.clearSingleTile(tile)
}



export function gameBoardInit() {
  gameBoard.addHandlerTileHover(controlTileHover)
  gameBoard.addHandlerTileClick(controlTileClick)
}