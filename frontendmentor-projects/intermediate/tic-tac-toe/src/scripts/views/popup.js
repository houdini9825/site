import xImage from '../../assets/icon-x.svg';
import oImage from '../../assets/icon-o.svg';

class PopupView {
	#parentElement = document.querySelector('.pop-up-container');
	#xImage = xImage;
	#oImage = oImage;

	renderPopup(msg) {
    const color = 'dark-green'
    const image = this.#xImage;
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

	#addToContainer(html) {
		this.#parentElement.innerHTML = html;
	}
}

export default new PopupView();
