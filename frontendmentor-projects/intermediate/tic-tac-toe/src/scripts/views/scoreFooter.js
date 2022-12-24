class ScoreFooter {
	#allScoreContainers = document.querySelectorAll('.score-container');

	#getContainer(char) {
		return document.querySelector(`.active-${char}-score-container`);
	}

	setLabel(char, label) {
		const container = this.#getContainer(char);

		const labelEl = container.querySelector(`.active-${char}-score-label`);

		labelEl.textContent = label;
	}

	changeScore(char, newScore) {
		const container = this.#getContainer(char);

		const scoreEl = container.querySelector(`.active-${char}-score`);

		scoreEl.textContent = newScore;
	}

	resetAllScores() {
		this.#allScoreContainers.forEach((c) => {
			const score = c.querySelector('.score-number');

			score.textContent = '0';
		});
	}
}

export default new ScoreFooter();
