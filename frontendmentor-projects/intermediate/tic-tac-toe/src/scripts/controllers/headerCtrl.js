import popup from '../views/popup.js';
// import scoreFooter from '../views/scoreFooter.js';
import header from '../views/header.js';
// import gameBoard from '../views/gameboard.js';

function controlRefreshBtn() {
  popup.renderRestartPopup()
  popup.showPopup()
}

export default function headerInit() {
  header.addHandlerRefreshBtn(controlRefreshBtn)
}