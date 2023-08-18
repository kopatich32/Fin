//Anchor animation

let arrow = document.querySelector('a[href="#top"]');
    arrow.addEventListener('click', function(event){
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


// document.addEventListener('click', function(event){
//     if(event.target.classList == 'hamburger' || event.target.classList == 'menu'){
//         let has = hamburgerButton.classList.toggle('choose')
//         if(has){
//             verticalMenu.style.left = '0'

//         }else{verticalMenu.style.left = '-70%'
//     }
//     }
// })

wrapperBurger.addEventListener('click', function(event){
    let has = hamburgerButton.classList.toggle('choose');
    if(has) { verticalMenu.style.left = '0px';
    }else{
        verticalMenu.style.left = '';
    }
    event.stopPropagation();
})

document.onclick = notMenu
function notMenu(e){
    if(!verticalMenu.contains(e.target)){
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

document.addEventListener('click', (e)=>{
    if(accBtn.contains(e.target)){
        wrapperForm.style.display = 'block'
    }else if(!form.contains(e.target)){
        wrapperForm.style.display = 'none'
    }
    else if(regButton.contains(e.target)){
        e.preventDefault()
        document.querySelector('form p').innerHTML = 'Регистрация';
        regField.style.visibility = 'visible'
        regButton.innerHTML = 'Зарегистрироваться'
        loginBtn.innerText = 'Авторизоваться'
        if(loginBtn.contains(e.target) && loginBtn.innerText === 'Авторизоваться'){
            regField.style.visibility = 'hidden'
        }
    }
})

// Calculator page
let ulArrow = document.querySelector('.date_wrapper');
let curMonth = document.querySelector('.current_months')
let ulList = document.querySelector('ul');
let changedMonth;
ulArrow.addEventListener('click', function(event){
ulList.classList.toggle('switch')
    if(event.target.tagName === 'LI'){
        curMonth.innerText = event.target.innerHTML
    }
    event.stopPropagation()

})
document.onclick = function(e){
    ulList.classList.remove('switch')
}

//Calculate deposit
let insertedMoney = document.querySelector('input[name="num"]');// ввод суммы
let totalSum = document.querySelector('.final_sum'); //общая сумма с доходом
let percent = document.querySelector('.percent');// процент по ставке
let income = document.querySelector('.income');// доход
let currentPercent = document.querySelectorAll('.list > li')
let span = document.querySelector('.span')
let perc;
insertedMoney.addEventListener('input', function(e){
    let event = e.target.value;
    let total = +event / 100 * 8;
    income.innerText = total + '₽';
    totalSum.innerText = +event + +total;
})

ulList.addEventListener('click', getValueOfLi)
function getValueOfLi (e){
  let attr =  e.target.getAttribute('value')
    perc = attr;
    span.innerText = perc
    percent.innerText = perc + '%'


    console.log(perc)
}
