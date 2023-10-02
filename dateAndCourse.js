
let currentValue = document.querySelector('.current_date')
let date = new Date;
let allMonth = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
function getMonth (month){
    return allMonth[month.getMonth()]
}

console.log(allMonth[4])
let thisYear = date.getFullYear();
let thisDay = date.getDate();
if(thisDay < 10 ){
    thisDay = '0'+thisDay
}
currentValue.innerHTML =`Сегодня ${thisDay}-е ${getMonth(date)} ${thisYear}`