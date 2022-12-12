'use strict';

const form = document.querySelector('form')
const percentButtons = document.querySelectorAll('button')
const buttonContainer = document.querySelector('.tip-percentages-container')
const billValue = document.querySelector('#bill')
const numPeople = document.querySelector('#numberpeople')
const customPercent = document.querySelector('#custompercent')
const tipAmount = document.querySelector('.tip-amount-person-value')
const totalAmount = document.querySelector('.total-amount-person-value')


function calculateAmounts() {
  const bill = Number(billValue.value);
  const percent = Number([...percentButtons].find(p => p.classList.contains('percent-button-active'))?.textContent.replace('%', '') || customPercent.value) / 100;
  const people = Number(numPeople.value);

  if (!(bill && percent && people)) return

  tipAmount.textContent = `$${(bill * percent / people).toFixed(2)}`
  totalAmount.textContent = `$${(bill * (percent + 1) / people).toFixed(2)}`
}

function resetFields() {
  billValue.value = '';
  numPeople.value = '';
  customPercent.value = '';
  tipAmount.textContent = '$0.00';
  totalAmount.textContent = '$0.00';
  resetButtons()
}

function resetButtons() {
  percentButtons.forEach(btn => btn.classList.remove('percent-button-active'))
}

buttonContainer.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.closest('.percentage') || e.target.closest('#custompercent')) {
    resetButtons()
    e.target.classList.add('percent-button-active')
    calculateAmounts()
  }
})

window.addEventListener('load', e => {
  resetFields()
})

document.addEventListener('input', e => {
  calculateAmounts()
})


form.addEventListener('submit', e => {
  e.preventDefault()
  resetFields()
})