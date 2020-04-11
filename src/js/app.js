import 'bootstrap/dist/css/bootstrap.css'
import '../css/style.css'
import './plugins/autocomplete'
import './plugins/tabs'
import { loginUI, registerUI } from './config/ui.config'
import { validate } from './helpers/validate'
import { showInputError, removeInputError } from './views/form'
import { login, register } from './services/auth.service'
import { notify } from './views/notification'
import './services/location.service'
import './plugins/autocomplete'

//login Form
const { form, inputEmail, inputPassword } = loginUI
const inputsLogin = [inputEmail, inputPassword]

// register Form
const {
  registerForm,
  registerEmail,
  registerPassword,
  registerNickname,
  registerFirstName,
  registerLastName,
  registerPhone,
  registerGender,
  registerBirthday,
  registerCountry,
  registerCity,
} = registerUI

const iputsRegister = [
  registerEmail,
  registerPassword,
  registerNickname,
  registerFirstName,
  registerLastName,
  registerPhone,
  registerGender,
  registerBirthday,
  registerCountry,
  registerCity,
]

//event
form.addEventListener('submit', (e) => {
  e.preventDefault()
  onSubmit()
})

registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  onRegisterSubmit()
})

inputsLogin.forEach((el) =>
  el.addEventListener('focus', () => removeInputError(el))
)

iputsRegister.forEach((el) =>
  el.addEventListener('focus', () => removeInputError(el))
)

//Handlers
async function onSubmit() {
  const isValidForm = inputsLogin.every((el) => {
    const isValidInput = validate(el)

    if (!isValidInput) {
      showInputError(el)
    }
    return isValidInput
  })

  if (!isValidForm) return

  try {
    await login(inputEmail.value, inputPassword.value)
    form.reset()
    //show succec notify
    notify({ msg: 'Login success', className: 'alert-success' })
  } catch (err) {
    //show error notify
    notify({ msg: 'Login faild', className: 'alert-danger' })
  }
}

async function onRegisterSubmit() {
  const isValidForm = iputsRegister.every((el) => {
    const isValidInput = validate(el)

    if (!isValidInput) {
      showInputError(el)
    }
    return isValidInput
  })

  if (!isValidForm) return

  const newUser = registerData()

  try {
    await register(newUser)
    registerForm.reset()
    //show succec notify
    notify({ msg: 'Register success', className: 'alert-success' })
  } catch (err) {
    //show error notify
    notify({ msg: 'Register faild', className: 'alert-danger' })
  }
}

function registerData() {
  const date = registerBirthday.value.split('-')
  const [year, month, day] = date

  return {
    email: registerEmail.value,
    password: registerPassword.value,
    nickname: registerNickname.value,
    first_name: registerFirstName.value,
    last_name: registerLastName.value,
    phone: registerPhone.value,
    gender_orientation: registerGender.value,
    country: registerCountry.value,
    city: registerCity.value,
    date_of_birth_day: day,
    date_of_birth_month: month,
    date_of_birth_year: year,
  }
}
