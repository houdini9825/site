class ScoreFooter {
	#allScoreContainers = document.querySelectorAll('.score-container');

	#getContainer(char) {
		return document.querySelector(`.active-${char}-score-container`);
	}

	setLabel(data) {
		const container = this.#getContainer(data.char);

		const labelEl = container.querySelector(`.active-${data.char}-score-label`);

		labelEl.textContent = `${data.id} (${data.char.toUpperCase()})`;
	}

	changeScore(data) {
		const container = this.#getContainer(data.char);

		const scoreEl = container.querySelector(`.active-${data.char}-score`);

		scoreEl.textContent = data.score;
	}

	resetAllScores() {
		this.#allScoreContainers.forEach((c) => {
			const score = c.querySelector('.score-number');

			score.textContent = '0';
		});
	}
}

export default new ScoreFooter();
