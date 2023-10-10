//Anchor animation
import anchor from './anchor.js'
let $ = document.querySelector.bind(document);

$('a[href="#top"]').onclick = anchor;
// Hamburger Menu
let wrapperBurger = $('.menu');
let hamburgerButton = $('.burger');
let verticalMenu = $('header');

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
let wrapperForm = $('.registration_wrapper');
let accBtn = $('.account');
let regButton = $('button[name="sign_in"]')
let regField = $('.top')
let loginBtn = $('button[name="login"]')

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
