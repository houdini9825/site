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
    this._toggleButtons(buttonContainer)
  }

  _toggleButtons(container: Element | null): void {
    container?.addEventListener('click', e => {
      e.preventDefault()
      if ((e.target as Element).closest('.percentage') || (e.target as Element).closest('#custompercent')) {
        this._resetButtons(percentButtons);
        (e.target as Element).classList.add('percent-button-active')
        this.calculateAmounts()
      }
    })
  }

  resetAll(): void {
    this._resetButtons(percentButtons)
    this._resetToEmpty([billValue, numPeople, customPercent])
    this._resetZeroDollars([tipAmount, totalAmount])
  }

	_resetToEmpty(elements: (Element | null)[]): void {
		for (const element of elements) {
      if (element) (<HTMLInputElement>element).value = '';
		}
	}

	_resetZeroDollars(elements: (Element | null)[]): void {
		for (const element of elements) {
			if (element) element.textContent = '$0.00';
		}
	}

	_resetButtons(buttons: NodeListOf<HTMLButtonElement>): void {
		buttons.forEach((btn) => btn.classList.remove('percent-button-active'));
    (customPercent as HTMLInputElement).value = '';
	}

	getPercentage(
		cPercent: number,
		percentBtns: any
	) {
		const customPercentVal = cPercent / 100;

		const defaultPercentVal = percentBtns.find((btn: Element) => btn.classList.contains('percent-button-active'));
		
    return defaultPercentVal ? Number(defaultPercentVal.textContent.replace('%', '')) / 100: Number(customPercentVal) / 100;
	}

	calculateTipAmount(bill: number, people: number): number {
		const percent = this.getPercentage(
			Number((<HTMLInputElement>customPercent).value),
			Array.from(percentButtons)
		);

		return bill * percent / people;
	}

	calculateTotalAmount(bill: number, people: number): number {
		const percent = this.getPercentage(
			Number((<HTMLInputElement>customPercent).value),
			Array.from(percentButtons)
		);
		return bill * (1 + percent) / people;
	}

	setTipValue(val: number): void {
		if (tipAmount && val) tipAmount.textContent = val.toFixed(2);
	}

	setTotalValue(val: number): void {
		if (totalAmount && val) totalAmount.textContent = val.toFixed(2);
	}

  calculateAmounts() {
    const tipAmount = this.calculateTipAmount(Number((billValue as HTMLInputElement).value), Number((numPeople as HTMLInputElement).value))
    
    const totalAmount = this.calculateTotalAmount(Number((billValue as HTMLInputElement).value), Number((numPeople as HTMLInputElement).value))

    if (Number.isFinite(tipAmount) && Number.isFinite(totalAmount)) {
    this.setTipValue(tipAmount)
    this.setTotalValue(totalAmount)
    }
  }
}


function main(): void {
  const app = new App()

  window.addEventListener('load', e => {
    app.resetAll()
  })

  document.addEventListener('input', app.calculateAmounts.bind(app)
  )

  form?.addEventListener('submit', e => {
    e.preventDefault()
    app.resetAll()
  })
}

main()


