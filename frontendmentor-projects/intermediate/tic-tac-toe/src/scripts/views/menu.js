class Menu {
	#pickContainer = document.querySelector('.pick-container');
	#pickBtns = [...this.#pickContainer.querySelectorAll('button')];
	#menuContainer = document.querySelector('.menu-container');
	selection = 'x';

	addHandlerNewGame(handler) {
		this.#menuContainer.addEventListener('click', handler);
	}

	addHandlerChangeChar(handler) {
		this.#pickContainer.addEventListener('click', handler);
	}

	#clearMenuCharSelection() {
		this.#pickBtns.forEach((btn) => (btn.id = ''));
	}

  hideMenu() {
    this.#menuContainer.classList.add('hidden')
  }

  showMenu() {
    this.#menuContainer.classList.remove('hidden')
  }

	#changeSelection() {
		const s = this.#pickBtns.find(
			(btn) => btn.id === 'char-button-active'
		);
		this.selection = s.dataset.val;
	}

	changeCharChoice(charEl) {
		this.#clearMenuCharSelection();
		charEl.id = 'char-button-active';
    this.#changeSelection()
	}
}

export default new Menu();
