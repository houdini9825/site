import formView from './../views/formView.js';
import outputView from './../views/outputView.js'
import * as model from './../models/model.js';


function handleGeneratePassword() {
  const selectedBoxes = formView.getSelectedCheckboxes()
  if (!selectedBoxes.length) return formView.showError()
  const password = model.generatePassword(selectedBoxes, formView.getPasswordLength())
  outputView.updateOutput(password)
}

function handleCopyClick() {
  const password = outputView.getPassword()
  if (!password) return
  navigator.clipboard.writeText(password)
  outputView.showCopiedLabel()
  setTimeout(outputView.hideCopiedLabel, 500)
}

function handleChangePasswordLength() {
  formView.updatePasswordLengthLabel()
  const strength = model.checkStrength(formView.getPasswordLength())
  formView.updateStrengthRating(strength)
  formView.updateStrengthRectangles(strength)
}


function init() {
  formView.addHandlerGenerate(handleGeneratePassword)
  formView.addHandlerChangePasswordLength(handleChangePasswordLength)
  formView.addHandlerUpdateOutputLength(handleChangePasswordLength)
  outputView.addHandlerCopyClick(handleCopyClick)
}


init()