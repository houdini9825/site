'use strict';

const form = document.querySelector('form');
const errorIcons = document.querySelectorAll('.error-icon');
const errorMessages = document.querySelectorAll('.error-msg');
const inputs = document.querySelectorAll('.input-container > input');

function validateText(type, name) {
	const inputContainer = form
		.querySelector(`input[name=${type}]`)
		.closest('div');

	const errorIcon = inputContainer.querySelector('.error-icon');
	const errorMsg = inputContainer.querySelector('.error-msg');

	if (name) {
		errorIcon.classList.add('hidden');
		errorMsg.classList.add('hidden');
    return true
	} else {
		errorIcon.classList.remove('hidden');
		errorMsg.classList.remove('hidden');
    return false
	}
}

function validateEmail(email) {
	const emailRegex = new RegExp(
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		'i'
	);

	const inputContainer = form
		.querySelector(`input[name=email]`)
		.closest('div');

	const errorIcon = inputContainer.querySelector('.error-icon');
	const errorMsg = inputContainer.querySelector('.error-msg');

	if (emailRegex.test(email)) {
		errorIcon.classList.add('hidden');
		errorMsg.classList.add('hidden');
		return true;
	} else {
		errorIcon.classList.remove('hidden');
		errorMsg.classList.remove('hidden');
		return false;
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(form);

	const results = [
		validateText('firstname', formData.get('firstname')),
		validateText('lastname', formData.get('lastname')),
		validateEmail(formData.get('email')),
		validateText('password', formData.get('password')),
	];

	if (results.every((el) => el)) {
		inputs.forEach((input) => {
			input.value = '';
		});
	}
});
