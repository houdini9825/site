'use strict';

const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const arrows = document.querySelectorAll('.arrow');
const questionList = document.querySelector('.dropdown-list');

questionList.addEventListener('click', function (e) {
	if (
		e.target.classList.contains('question') ||
		e.target.classList.contains('arrow')
	) {
		const parent = e.target.closest('.question-container');
		const question = parent.querySelector('.question');
		const arrow = parent.querySelector('.arrow');
		const answer = parent.querySelector('.answer');

		const active = question.classList.contains('selected');

		questions.forEach((question) => question.classList.remove('selected'));
		answers.forEach((answer) => answer.classList.add('--hidden'));
		arrows.forEach((arrow) => arrow.classList.remove('selected'));

		if (!active) {
			question.classList.add('selected');
			arrow.classList.add('selected');
			answer.classList.remove('--hidden');
		}
	}
});
