import xImage from '../../assets/icon-x.svg';
import oImage from '../../assets/icon-o.svg';

class Header {
  #refreshBtn = document.querySelector('.active-reset-button')
  #currentTurnContainer = document.querySelector('.active-turn-notifier')
  #images = {x: xImage, o: oImage}

  setCurrentTurnImg(data) {
    this.#currentTurnContainer.innerHTML = ''
    const html = `
    <img class="current-turn-image" src="${this.#images[data.char]}" />
    <p>Turn</p>`
    this.#currentTurnContainer.insertAdjacentHTML('afterbegin', html)
  }


  addHandlerRefreshBtn(handler) {
    this.#refreshBtn.addEventListener('click', handler)
  }
}

export default new Header()