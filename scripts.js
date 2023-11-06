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
let regButton = $('button[name="sign_in"]');
let regField = $('.top');
let loginBtn = $('button[name="login"]');
let registration = $('button[name="reg"]');
let auth = $('.auth');
let fileInput = $('.file-input').parentElement;

document.addEventListener('click', (e) => {
    if (accBtn.contains(e.target)) {
        // e.preventDefault();
        wrapperForm.style.display = 'block';
    }
    else if (!form.contains(e.target)) {
        wrapperForm.style.display = 'none';
        }
    else if (regButton.contains(e.target)){ //sign_in
        e.preventDefault();
        form.querySelector('p').innerHTML = 'Регистрация';
        regField.style.visibility = 'visible';
        regButton.style.display = 'none';
        registration.style.display = 'block';
        loginBtn.style.display = 'none';
        auth.style.display = 'block';
        fileInput.style.visibility = 'visible';
        fileInput.removeAttribute('disabled');

    }
    // else if(registration.contains(e.target)){ //reg
    //     // regField.style.visibility = 'visible';
    //     // registration.style.display = 'none';
    //     // regButton.style.display = 'block';
    //     // auth.style.display = 'none';
    //     // regButton.innerHTML = 'Зарегистрироваться'
    //     // loginBtn.innerText = 'Авторизоваться'
    // }
    else if (auth.contains(e.target)) {
        e.preventDefault()
        form.querySelector('p').innerHTML = 'Войти в профиль';
        regField.style.visibility = 'hidden'
        loginBtn.style.display = 'block';
        auth.style.display = 'none';
        regButton.style.display = 'block';
        registration.style.display = 'none';
        fileInput.style.visibility = 'hidden';
        fileInput.setAttribute('disabled',true)


    }
})

let form1 = document.forms.registration;

let res = form1.querySelector('label').offsetHeight
console.log(res)