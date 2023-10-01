fetch('https://www.cbr-xml-daily.ru/latest.js')
    .then(response => response.json())
    .then(data => {
        forValue(data)
    })
function forValue(cash){
    console.log(cash)
    value_of_day.innerText = "Курс валют за " +  cash.date
    buy_usd.innerText = (1 / cash.rates.USD).toFixed(2)
    buy_eur.innerText = (1 / cash.rates.EUR).toFixed(2)
    sell_doll.innerText =  (+buy_usd.innerText * 1.040603852160333).toFixed(2)
    sell_eur.innerText = (+buy_eur.innerText * 1.040603852160333).toFixed(2)
}
