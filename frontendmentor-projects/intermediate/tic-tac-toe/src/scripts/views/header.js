import xImage from '../../assets/icon-x.svg';
import oImage from '../../assets/icon-o.svg';

class Header {
  #refreshBtn = document.querySelector('.active-reset-button')
  #currentTurnImg = document.querySelector('.current-turn-image')
  #images = [xImage, oImage]
  #imageIndex = 0;

  setCurrentTurnImg() {
    this.#currentTurnImg.setAttribute('src', this.#images[this.#imageIndex])
    this.#changeCurrentTurnImg()
  }

  #changeCurrentTurnImg() {
    this.#imageIndex === 0 ? this.#imageIndex = 1 : this.#imageIndex = 0;
  }

  addHandlerRefreshBtn(handler) {
    this.#refreshBtn.addEventListener('click', handler)
  }
}

export default new Header()