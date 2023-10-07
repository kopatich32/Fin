//Anchor animation
import anchor from './anchor.js'
document.querySelector('a[href="#top"]').onclick = anchor;

// Hamburger Menu
let wrapperBurger = document.querySelector('.menu');
let hamburgerButton = document.querySelector('.burger');
let verticalMenu = document.querySelector('header');

wrapperBurger.addEventListener('click', function (event) {
    let has = hamburgerButton.classList.toggle('choose');
    if (has) {
        verticalMenu.style.left = '0px';
    } else {
        verticalMenu.style.left = '';
    }
    event.stopPropagation();
})
document.onclick = function(e) {
    if (!verticalMenu.contains(e.target)) {
        verticalMenu.style.left = null;
        hamburgerButton.classList.remove('choose');
    }
}


// Log in form
let form = document.forms.registration;
let wrapperForm = document.querySelector('.registration_wrapper');
let accBtn = document.querySelector('.account');
let regButton = document.querySelector('button[name="sign_in"]')
let regField = document.querySelector('.top')
let loginBtn = document.querySelector('button[name="login"]')

document.addEventListener('click', (e) => {
    if (accBtn.contains(e.target)) {
        wrapperForm.style.display = 'block'
    } else if (!form.contains(e.target)) {
        wrapperForm.style.display = 'none'
    } else if (regButton.contains(e.target) && regButton.innerText === 'Нет аккаунта?'){
        e.preventDefault()
        form.querySelector('p').innerHTML = 'Регистрация';
        regField.style.visibility = 'visible'
        regButton.innerHTML = 'Зарегистрироваться'
        loginBtn.innerText = 'Авторизоваться'
    }else if(regButton.contains(e.target) && regButton.innerText === 'Зарегистрироваться' ){
        regField.style.visibility = 'visible'
        regButton.innerHTML = 'Зарегистрироваться'
        loginBtn.innerText = 'Авторизоваться'
    }
    else if (loginBtn.contains(e.target) && loginBtn.innerText === 'Авторизоваться') {
        e.preventDefault()
        regField.style.visibility = 'hidden'
        loginBtn.innerText = 'Войти'
    }
})
