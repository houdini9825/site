'use strict';

const numbers = document.querySelectorAll('.rating-number');
const questionContainer = document.querySelector('.question-container');
const thankyouContainer = document.querySelector('.ty-container');
const submitButton = document.querySelector('.submit');
const selectedNumber = document.querySelector('.ty-selected-number');

numbers.forEach((num) => {
	num.addEventListener('click', (e) => {
		e.preventDefault();
		numbers.forEach((num) => {
			num.classList.remove('selected');
			num.classList.add('number');
		});
		num.classList.remove('number');
		num.classList.add('selected');
	});
});

submitButton.addEventListener('click', (e) => {
	const num = [...numbers].find((n) => n.classList.contains('selected'));
	if (num) {
		questionContainer.classList.remove('--active');
		questionContainer.classList.add('--hidden');
		thankyouContainer.classList.remove('--hidden');
		thankyouContainer.classList.add('--active');
		selectedNumber.textContent = num.dataset.value;
	} else {
		alert('Please select a number before submitting.');
	}
});
