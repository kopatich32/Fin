
let currentValue = document.querySelector('.current_date')
let date = new Date;
let allMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
function getMonth (month){
    return allMonth[month.getMonth()]
}
let thisYear = date.getFullYear();
let thisDay = date.getDate();
currentValue.innerHTML ='Сегодня ' +  thisYear + '-' + getMonth(date) + '-' + thisDay