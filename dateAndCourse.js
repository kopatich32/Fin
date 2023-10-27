let currentValue = document.querySelector('.current_date')
let date = new Date;
export let allMonth = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
function getMonth (month){
    return allMonth[month.getMonth()]
}
let thisYear = date.getFullYear();
let thisDay = date.getDate();
if(thisDay < 10 ){
    thisDay = '0'+thisDay
}
currentValue.innerHTML =`Сегодня ${thisDay}-е ${getMonth(date)} ${thisYear}`;

