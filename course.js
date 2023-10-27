// course
// import array of months
import {allMonth} from './dateAndCourse.js';


fetch('https://www.cbr-xml-daily.ru/latest.js')
    .then(response => response.json())
    .then(data => {
        forValue(data)
    })
function forValue(cash){
    console.log(cash)
    let getFetchMonth = cash.date.split('-');
    value_of_day.innerText = "Курс валют на " +  getFetchMonth[2] + '-'+ allMonth[getFetchMonth[1]-1]+'-'+getFetchMonth[0];
    buy_usd.innerText = (1 / cash.rates.USD).toFixed(2)
    buy_eur.innerText = (1 / cash.rates.EUR).toFixed(2)
    sell_doll.innerText =  (+buy_usd.innerText * 1.040603852160333).toFixed(2);
    sell_eur.innerText = (+buy_eur.innerText * 1.040603852160333).toFixed(2);
}
// watch
let time = document.querySelector('.time_now')
function showTime() {
    time.innerHTML = new Date().toLocaleTimeString() + ' МСК'
}
setInterval(showTime, 1000);
