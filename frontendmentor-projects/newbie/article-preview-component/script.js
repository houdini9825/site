'use strict';

const footer = document.querySelector('footer');
const nameContainer = document.querySelector('.name-container');
const socialIcons = document.querySelector('.social-icons');
const arrowContainer = document.querySelector('.arrow-container');
const arrowPath = document.querySelector('.arrow > path');

window.addEventListener('resize', function (e) {
	const viewportWidth = document.documentElement.clientWidth;
	if (viewportWidth < 730) {
		if (!socialIcons.classList.contains('hidden')) {
			footer.classList.add('footer-share');
			nameContainer.classList.add('hidden');
		}
	} else if (viewportWidth >= 730) {
		footer.classList.remove('footer-share');
		nameContainer.classList.remove('hidden');
	}
});

arrowContainer.addEventListener('click', function (e) {
	const viewportWidth = document.documentElement.clientWidth;
	socialIcons.classList.toggle('hidden');
	arrowContainer.classList.toggle('arrow-container-active');
	arrowPath.classList.toggle('arrow-active');

	// Desktop
	if (viewportWidth >= 730) {
		footer.classList.remove('footer-share');
	}
	// Mobile
	else {
		footer.classList.toggle('footer-share');
		nameContainer.classList.toggle('hidden');
	}
});
