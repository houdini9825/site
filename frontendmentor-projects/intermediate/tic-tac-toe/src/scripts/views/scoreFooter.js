class ScoreFooter {
	// #xScoreContainer = document.querySelector('.active-x-score-container')
	// #oScoreContainer = document.querySelector('.active-o-score-container')
	// #tieScoreContainer = document.querySelector('.active-tie-score-container')

	#getContainer(char) {
		return document.querySelector(`.active-${char}-score-container`);
	}

	setLabel(char, label) {
		const container = this.#getContainer(char);

		const labelEl = container.querySelector(
			`.active-${char}-score-label`
		);

		labelEl.textContent = label;
	}

	changeScore(char, newScore) {
		const container = this.#getContainer(char);

		const scoreEl = container.querySelector(`.active-${char}-score`);

		scoreEl.textContent = newScore;
	}
}

export default new ScoreFooter()
