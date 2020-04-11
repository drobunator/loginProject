const navLoginBtn = document.querySelector('.nav-login')
const navRegisternBtn = document.querySelector('.nav-register')
const formLoginBlock = document.querySelector('.login-form')
const formRegisterBlock = document.querySelector('.register-form')

navLoginBtn.addEventListener('click', (e) => {
  if (!navLoginBtn.classList.contains('active')) {
    navLoginBtn.classList.add('active')
  }
  if (formLoginBlock.classList.contains('inactive')) {
    formLoginBlock.classList.remove('inactive')
  }
  navRegisternBtn.classList.remove('active')
  formRegisterBlock.classList.add('inactive')
})

navRegisternBtn.addEventListener('click', () => {
  if (!navRegisternBtn.classList.contains('active')) {
    navRegisternBtn.classList.add('active')
  }

  if (formRegisterBlock.classList.contains('inactive')) {
    formRegisterBlock.classList.remove('inactive')
  }
  navLoginBtn.classList.remove('active')
  formLoginBlock.classList.add('inactive')
})
