let $ = document.querySelector.bind(document);
let ulArrow = $('.date_wrapper');
let curMonth = $('.current_months')
let ulList = $('ul');

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
let insertedMoney = $('input[name="num"]');// ввод суммы
let totalSum = $('.final_sum'); //общая сумма с доходом
let percent = $('.percent');// процент по ставке
let income = $('.income');// доход
let endMonth = $('.month_of_end')

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
    percent.innerText = perc + '%';
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
    let total = +insertedMoney.value / 100 * Number(parseInt(percent.innerText)) / 12 * curPer;
    totalSum.innerText = (+insertedMoney.value + +total).toFixed(2)  + '₽';
    income.innerText = (total).toFixed(2) + '₽';
}
