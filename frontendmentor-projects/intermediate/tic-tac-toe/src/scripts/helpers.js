import * as game from './models/game.js';
import {computerTurn} from './controllers/gameBoardCtrl.js';

export function checkIfComputerGoesFirst() {
  if (game.state.player2.getInfo().char === 'x') computerTurn()
}