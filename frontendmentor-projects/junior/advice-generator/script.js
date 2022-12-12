'use strict';

const url = 'https://api.adviceslip.com/advice';
const quoteContainer = document.querySelector('.quote')
const adviceNumber = document.querySelector('.advice-number')
const button = document.querySelector('button')

async function getQuote() {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Oops, something went wrong. Please try loading a quote again.')
    const data = await response.json()
    const idNum = data['slip']['id']
    const advice = data['slip']['advice']
    changeQuote(advice, idNum)
  }
  catch (error) {
    displayError(error)
  }
}

// function getQ() {
//   const request = fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const idNum = data['slip']['id']
//     const advice = data['slip']['advice']
//     changeQuote(advice, idNum)
//   })
//   .catch(error => displayError(error))
// }

function changeQuote(quote, number) {
  quoteContainer.textContent = quote;
  adviceNumber.textContent = number;
}

function displayError(error) {
  console.log(error)
  alert(error)
}



button.addEventListener('click', e => {
  e.preventDefault()
  getQuote()
  console.log('working')
})

document.addEventListener('DOMContentLoaded', getQuote)