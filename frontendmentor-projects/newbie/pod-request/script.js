'use strict';

const form = document.querySelector('form');
const emailBox = document.getElementById('email');
const submitButton = document.getElementById('submit');
const errorMessage = document.querySelector('.form-error-message');

emailBox.addEventListener('input', e => {
  if (!emailBox.value) errorMessage.classList.add('hidden')
})

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const emailRegex = new RegExp(
		/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
		'i'
	);
	if (emailRegex.test(emailBox.value)) {
		emailBox.value = '';
		errorMessage.classList.add('hidden');
	} else {
		errorMessage.classList.remove('hidden');
	}
});
