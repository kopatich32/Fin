//Anchor animation
import anchor from './anchor.js';

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
document.onclick = function (e) {
    if (!verticalMenu.contains(e.target)) {
        verticalMenu.style.left = null;
        hamburgerButton.classList.remove('choose');
    }
}


// Log in form
let formReg = document.forms.registration;
let formAuth = document.forms.auth;
let regWrapper = $('.registration_wrapper');
let authWrapper = $('.auth_wrapper');
let accBtn = $('.account');
let regButton = $('button[name="sign_in"]');
// let loginBtn = $('button[name="login"]');
let registration = $('button[name="reg"]');
let auth = $('.auth');
let fileInput = $('.file-input').parentElement;


//Scroll width
let scrollwidth = window.innerWidth - document.documentElement.clientWidth;
console.log(scrollwidth+'px');

document.addEventListener('click', (e) => {
    if (accBtn.contains(e.target)) {
        e.preventDefault();
        authWrapper.style.display = 'block';
        document.body.style.cssText +=
            `overflow: hidden;
            padding-right: ${scrollwidth}px;
            `
    } else if (!formAuth.contains(e.target)) {
        authWrapper.style.display = 'none';
        document.body.style.overflow = null;
        document.body.style.paddingRight = null;


    }

    if (regButton.contains(e.target)) { //sign_in
        e.preventDefault();
        authWrapper.style.display = 'none';
        regWrapper.style.display = 'block';
        fileInput.removeAttribute('disabled');
    }else if(!formReg.contains(e.target)){
        regWrapper.style.display = 'none';
    }
    if(auth.contains(e.target)){
        e.preventDefault();
        regWrapper.style.display = 'none';
        authWrapper.style.display = 'block';
    }
})

formReg.addEventListener('submit', (e) => {
    let isValid = true;
    let lengthOfInput = $('input[name="reg_password"]').value;
    if (lengthOfInput.length > 0 && lengthOfInput.length < 6) {
        $('.alert').style.display = 'block';
        $('.alert').innerText = 'Слишком короткий пароль';
        isValid = false;
    }
    if(!isValid){
        e.preventDefault();
    }else{
        isValid = true;
    }
})
// Сохранение окна открытым, если форма не прошла валидацию
if($('input[name="auth_email"]').value != ""){
authWrapper.style.display ='block';
}
if($('input[name="reg_email"]').value != ''){
  regWrapper.style.display = 'block';
}
