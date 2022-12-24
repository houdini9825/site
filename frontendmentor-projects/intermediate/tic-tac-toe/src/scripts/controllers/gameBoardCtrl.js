import popup from '../views/popup.js';
import scoreFooter from '../views/scoreFooter.js';
import header from '../views/header.js';
import gameBoard from '../views/gameboard.js';
import menu from '../views/menu.js';
import * as game from '../models/game.js'

function controlTileClick(e) {
  const tile = e.target.closest('.active-game-tile')
  if (!tile || tile.classList.contains('selected-tile')) return

  const activePlayer = game.state.getCurrentActingInfo()

  const tileSelection = Number(tile.id.slice(-1))

  gameBoard.addCharToTile(tile, activePlayer.char)

  game.state.makeMove(tileSelection)

  console.log(game.state)
}

function controlTileHover(e) {
  e.preventDefault()
  const tile = e.target.closest('.active-game-tile')
  if (!tile || tile.innerHTML) return
  console.log('hoverin')

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



export default function gameBoardInit() {
  gameBoard.addHandlerTileHover(controlTileHover)
  gameBoard.addHandlerTileClick(controlTileClick)
}