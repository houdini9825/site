class Menu {
	#pickContainer = document.querySelector('.pick-container');
	#pickBtns = [...this.#pickContainer.querySelectorAll('button')];
	#menuContainer = document.querySelector('.menu-container');
	#difficultyContainer = document.querySelector('.difficulty-container');

	addHandlerNewGame(handler) {
		this.#menuContainer.addEventListener('click', handler);
	}

	addHandlerChangeChar(handler) {
		this.#pickContainer.addEventListener('click', handler);
	}

	addHandlerSelectDifficulty(handler) {
		this.#difficultyContainer.addEventListener('click', handler);
	}

	addHandlerCloseErrorMessage(handler) {
		const errorMessage = document.querySelector('.error-message');
		errorMessage.addEventListener('click', handler);
	}

	clearMenuCharSelection() {
		this.#pickBtns.forEach((btn) => (btn.id = ''));
	}

	clearDifficulties() {
		const difficulties = document.querySelectorAll('.difficulty-choice');

		difficulties.forEach((d) => d.classList.remove('selected-difficulty'));
	}

	getDifficulty() {
		const difficulties = [
			...document.querySelectorAll('.difficulty-choice'),
		];

		return difficulties.find((d) =>
			d.classList.contains('selected-difficulty')
		).dataset.val;
	}

	checkIfDifficultySelected() {
		const difficulties = [
			...document.querySelectorAll('.difficulty-choice'),
		];

		return difficulties.find((d) =>
			d.classList.contains('selected-difficulty')
		);
	}

	checkIfCharSelected() {
		return this.#pickBtns.find((b) => b.id === 'char-button-active');
	}

	showErrorMessage() {
		document.querySelector('.error-message').classList.remove('hidden');
	}

	closeErrorMessage() {
		document.querySelector('.error-message').classList.add('hidden');
	}

	hideMenu() {
		this.#menuContainer.classList.add('hidden');
	}

	showMenu() {
		this.#menuContainer.classList.remove('hidden');
	}

	getSelection() {
		const s = this.#pickBtns.find((btn) => btn.id === 'char-button-active');
		return s.dataset.val;
	}

	changeCharChoice(charEl) {
		this.clearMenuCharSelection();
		charEl.id = 'char-button-active';
	}
}

export default new Menu();
