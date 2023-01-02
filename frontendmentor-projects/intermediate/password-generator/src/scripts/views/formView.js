

class FormView {
  #formElement = document.querySelector('form')

  addHandlerGenerate(handler) {
    this.#formElement.addEventListener('click', function(e) {
      const btn = e.target.closest('#generate-btn')
      if (!btn) return
      e.preventDefault()
      handler()
    })
  }

  addHandlerChangePasswordLength(handler) {
    this.#formElement.addEventListener('input', function(e) {
      const range = e.target.closest('#password-length')
      if (!range) return
      handler()
    })
  }

  addHandlerUpdateOutputLength(handler) {
    window.addEventListener('load', handler)
  }

  updateStrengthRating(rating) {
    const ratingTable = {tooWeak: 'Too weak!', weak: 'Weak', medium: 'Medium', strong: 'Strong'}
    const strengthRating = document.querySelector('.strength-rating-text')
    strengthRating.textContent = ratingTable[rating];
  }

  updateStrengthRectangles(rating) {
    this.clearStrengthRectangles()
    const ratingTable = {tooWeak: {numRects: 1, class: 'too-weak'}, weak: {numRects: 2, class: 'weak'}, medium: {numRects: 3, class: 'medium'}, strong: {numRects: 4, class: 'strong'}}
    const rects = [...document.querySelectorAll('.strength-rectangle')]

    for (let i=0; i<ratingTable[rating].numRects; i++) {
      rects[i].classList.add(ratingTable[rating].class)
    }
  }

  clearStrengthRectangles() {
    const rects = document.querySelectorAll('.strength-rectangle')
    rects.forEach(r => r.classList.remove('too-weak', 'weak', 'medium', 'strong'))
  }


  getSelectedCheckboxes() {
    const checks = [...document.querySelectorAll('input[type=checkbox]')].filter(c => c.checked)?.map(c => c.name.split('-')[1])
    return checks
  }

  getPasswordLength() {
    const range = document.querySelector('#password-length')
    return Number(range.value)
  }

  updatePasswordLengthLabel() {
    const len = this.getPasswordLength()
    const label = document.querySelector('.length-value');
    label.textContent = len;
  }

  showError() {
    alert('Must select at least one character option.')
  }
}

export default new FormView()