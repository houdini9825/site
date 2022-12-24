import xImage from '../../assets/icon-x.svg';
import oImage from '../../assets/icon-o.svg';

class PopupView {
	#parentElement = document.querySelector('.pop-up-container');
	#xImage = xImage;
	#oImage = oImage;

	renderWinPopup(data) {
    const msg = data.msg;
    const color = data.char === 'x' ? 'dark-green' : 'dark-orange';
    const image = data.char === 'x' ? this.#xImage : this.#oImage;

		const html = `<p class="game-complete-msg">${msg}</p>
    <div class="takes-round-container">
      <img src="${image}" alt="">
      <p class="${color}">Takes the round</p>
    </div>
    <div class="popup-buttons-container">
      <button class="quit-btn">
        Quit
      </button>
      <button class="next-round-btn">
        Next Round
      </button>
    </div>`;

		this.#addToContainer(html);
	}

  renderTiePopup() {
    const html = `<p class="tied-restart-msg">Round Tied</p>
    <div class="popup-buttons-container">
      <button class="quit-btn">
        Quit
      </button>
      <button class="next-round-btn">
        Next Round
      </button>
    </div>`;

    this.#addToContainer(html)
  }

  renderRestartPopup() {
    const html = `<p class="tied-restart-msg">Round Tied</p>
    <div class="popup-buttons-container">
      <button class="cancel-btn">
        Quit
      </button>
      <button class="restart-btn">
        Next Round
      </button>
    </div>`;

    this.#addToContainer(html)
  }

	#addToContainer(html) {
		this.#parentElement.innerHTML = html;
	}
}

export default new PopupView();
