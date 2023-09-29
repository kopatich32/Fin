//Anchor animation

let arrow = document.querySelector('a[href="#top"]');
arrow.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#top').scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
})

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
    } else if (regButton.contains(e.target)) {
        e.preventDefault()
        document.querySelector('form p').innerHTML = 'Регистрация';
        regField.style.visibility = 'visible'
        regButton.innerHTML = 'Зарегистрироваться'
        loginBtn.innerText = 'Авторизоваться'
        if (loginBtn.contains(e.target) && loginBtn.innerText === 'Авторизоваться') {
            regField.style.visibility = 'hidden'
        }
    }
})

// Calculator page
let ulArrow = document.querySelector('.date_wrapper');
let curMonth = document.querySelector('.current_months')
let ulList = document.querySelector('ul');

ulArrow.addEventListener('click', function (event) {
    ulList.classList.toggle('switch')
    if (event.target.tagName === 'LI') {
        curMonth.innerText = event.target.innerHTML
    }
    event.stopPropagation()

})
document.onclick = function (e) {
    ulList.classList.remove('switch')
}
//Calculate deposit
let insertedMoney = document.querySelector('input[name="num"]');// ввод суммы
let totalSum = document.querySelector('.final_sum'); //общая сумма с доходом
let percent = document.querySelector('.percent');// процент по ставке
let income = document.querySelector('.income');// доход
let endMonth = document.querySelector('.month_of_end')

let perc;
let curPer = 1;
let clickEvent;
ulList.addEventListener('click', clickFunction);
insertedMoney.addEventListener('input', inputFunction);

let date = new Date();
let allMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

function clickFunction (e){
    if(+insertedMoney.value > 10000000) insertedMoney.value = 10000000;
    clickEvent = e.target
     perc =  clickEvent.getAttribute('value');
     curPer = clickEvent.dataset.month
    checkDate()
    percent.innerText = perc;
    total()
}

 function inputFunction(){
    this.value = this.value.replace(/\D/g,'');
    if(+insertedMoney.value < 0) return;
    if(+insertedMoney.value > 10000000) insertedMoney.value = 10000000;
    total()
     checkDate()
}

function checkDate(){
    let year = date.getFullYear()
    let sumMonth = date.getMonth() + +(curPer)
    if(sumMonth > 11){
        year += 1;
        sumMonth = sumMonth - 12
    }
    endMonth.innerHTML = date.getDate() + ' ' + allMonth[sumMonth] +' '+(year)
}

function total(){
    let total = +insertedMoney.value / 100 * Number(percent.innerText) / 12 * curPer;
    totalSum.innerText = (+insertedMoney.value + +total).toFixed(2)  + '₽';
    income.innerText = (total).toFixed(2) + '₽';
}





// function num_word(value, words){
//     value = Math.abs(value) % 100;
//     let num = value % 10;
//     if(value > 10 && value < 20) return words[2];
//     if(num > 1 && num < 5) return words[1];
//     if(num == 1) return words[0];
//     return words[2];
// }
//
// $('form input[type="number"]').change(function(){
//     let count = 0;
//     $('form input[type="number"]').each(function(){
//         val = parseInt($(this).val());
//         if (!isNaN(val)){
//             count = count + val;
//         }
//     });
//
//     $('#js_result').html(count + ' ' + num_word(count, ['товар', 'товара', 'товаров']));
// });
// let formCalc = document.forms.calculator
//
// function calculate() {
//     let insertValue = +formCalc.num.value
//     if (!insertValue) return
//         let result = +insertValue / 100 * +gotPercent / 12;
//     totalSum.innerText = result.toFixed(2) + '₽'
// }
//
// insertedMoney.oninput = calculate;
// ulList.onclick = calculate;