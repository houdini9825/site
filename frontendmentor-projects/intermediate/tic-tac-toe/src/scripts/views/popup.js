import xImage from '../../assets/icon-x.svg';
import oImage from '../../assets/icon-o.svg';

class PopupView {
	#parentElement = document.querySelector('.pop-up-container');
	#xImage = xImage;
	#oImage = oImage;

  addHandlerPopup(handler) {
    this.#parentElement.addEventListener('click', handler)
  }

  showPopup() {
    this.#parentElement.classList.remove('hidden')
  }

  hidePopup() {
    this.#parentElement.classList.add('hidden')
  }

	renderWinPopup(data) {
    const msg = data.id === 'You' ? 'You won!' : 'Oh no, you lost.';
    const color = data.char === 'x' ? 'dark-green' : 'dark-orange';
    const image = data.char === 'x' ? this.#xImage : this.#oImage;

		const html = `<p class="game-complete-msg">${msg}</p>
    <div class="takes-round-container">
      <img src="${image}" alt="">
      <p class="${color}">Takes the round</p>
    </div>
    <div class="popup-buttons-container">
      <button class="popup-btn quit-btn">
        Quit
      </button>
      <button class="popup-btn next-round-btn">
        Next Round
      </button>
    </div>`;

		this.#addToContainer(html);
	}

  renderTiePopup() {
    const html = `<p class="tied-restart-msg">Round Tied</p>
    <div class="popup-buttons-container">
      <button class="popup-btn quit-btn">
        Quit
      </button>
      <button class="popup-btn next-round-btn">
        Next Round
      </button>
    </div>`;

    this.#addToContainer(html)
  }

  renderRestartPopup() {
    const html = `<p class="tied-restart-msg">Restart Game?</p>
    <div class="popup-buttons-container">
      <button class="popup-btn cancel-btn">
        No, cancel
      </button>
      <button class="popup-btn restart-btn">
        Yes, restart
      </button>
    </div>`;

    this.#addToContainer(html)
  }

	#addToContainer(html) {
		this.#parentElement.innerHTML = html;
	}
}

export default new PopupView();
