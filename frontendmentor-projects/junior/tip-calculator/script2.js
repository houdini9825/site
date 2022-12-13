"use strict";
const form = document.querySelector('form');
const percentButtons = document.querySelectorAll('button');
const buttonContainer = document.querySelector('.tip-percentages-container');
const billValue = document.querySelector('#bill');
const numPeople = document.getElementById('numberpeople');
const customPercent = document.querySelector('#custompercent');
const tipAmount = document.querySelector('.tip-amount-person-value');
const totalAmount = document.querySelector('.total-amount-person-value');
class App {
    constructor() {
        this._toggleButtons(buttonContainer);
    }
    _toggleButtons(container) {
        container === null || container === void 0 ? void 0 : container.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.closest('.percentage') || e.target.closest('#custompercent')) {
                this._resetButtons(percentButtons);
                e.target.classList.add('percent-button-active');
                this.calculateAmounts();
            }
        });
    }
    resetAll() {
        this._resetButtons(percentButtons);
        this._resetToEmpty([billValue, numPeople, customPercent]);
        this._resetZeroDollars([tipAmount, totalAmount]);
    }
    _resetToEmpty(elements) {
        for (const element of elements) {
            if (element)
                element.value = '';
        }
    }
    _resetZeroDollars(elements) {
        for (const element of elements) {
            if (element)
                element.textContent = '$0.00';
        }
    }
    _resetButtons(buttons) {
        buttons.forEach((btn) => btn.classList.remove('percent-button-active'));
        customPercent.value = '';
    }
    getPercentage(cPercent, percentBtns) {
        const customPercentVal = cPercent / 100;
        const defaultPercentVal = percentBtns.find((btn) => btn.classList.contains('percent-button-active'));
        return defaultPercentVal ? Number(defaultPercentVal.textContent.replace('%', '')) / 100 : Number(customPercentVal) / 100;
    }
    calculateTipAmount(bill, people) {
        const percent = this.getPercentage(Number(customPercent.value), Array.from(percentButtons));
        return bill * percent / people;
    }
    calculateTotalAmount(bill, people) {
        const percent = this.getPercentage(Number(customPercent.value), Array.from(percentButtons));
        return bill * (1 + percent) / people;
    }
    setTipValue(val) {
        if (tipAmount && val)
            tipAmount.textContent = val.toFixed(2);
    }
    setTotalValue(val) {
        if (totalAmount && val)
            totalAmount.textContent = val.toFixed(2);
    }
    calculateAmounts() {
        const tipAmount = this.calculateTipAmount(Number(billValue.value), Number(numPeople.value));
        const totalAmount = this.calculateTotalAmount(Number(billValue.value), Number(numPeople.value));
        if (Number.isFinite(tipAmount) && Number.isFinite(totalAmount)) {
            this.setTipValue(tipAmount);
            this.setTotalValue(totalAmount);
        }
    }
}
function main() {
    const app = new App();
    window.addEventListener('load', e => {
        app.resetAll();
    });
    document.addEventListener('input', app.calculateAmounts.bind(app));
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', e => {
        e.preventDefault();
        app.resetAll();
    });
}
main();
