

class OutputView {
  #parentElement = document.querySelector('.password-output-container')
  #outputElement = document.querySelector('.password-output')


  addHandlerCopyClick(handler) {
    this.#parentElement.addEventListener('click', function(e) {
      const element = e.target.closest('.copy-icon')
      if (!element) return
      handler()
    })
  }

  getPassword() {
    if (this.#outputElement.classList.contains('empty')) return
    return this.#outputElement.textContent
  }

  updateOutput(password) {
    this.#outputElement.classList.remove('empty')
    this.#outputElement.textContent = password;
  }

  resetOutput() {
    this.#outputElement.textContent = 'P4$5W0rD';
    this.#outputElement.classList.add('empty')
  }

  showCopiedLabel() {
    const copiedElement = document.querySelector('.copied-label')
    copiedElement.classList.remove('hidden')
  }

  hideCopiedLabel() {
    const copiedElement = document.querySelector('.copied-label')
    copiedElement.classList.add('hidden')
  }
}

export default new OutputView()