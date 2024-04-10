const KEY = `iHX8YGtrjmWZB0HUqQE7hpqClJt8WU5r`
const endpoint = `https://api.currencybeacon.com/v1/latest`

let rates = {}
const fromCurrency = document.querySelector('.fromCurrency')
const toCurrency = document.querySelector('.toCurrency')

const inputAmount = document.querySelector('.inputAmount')
const outputAmount = document.querySelector('.outputAmount')

const getCurrencies = (base = 'USD') => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", endpoint + `?api_key=${KEY}&base=${base}`)
    xhr.onload = () => {
        let response = xhr.responseText //JSON string
        let data = JSON.parse(response)
        console.log(data.rates)
        rates = {
            MDL: data.rates.MDL,
            EUR: data.rates.EUR,
            USD: data.rates.USD
        }

        fromCurrency.innerHTML = `<option value="0">--select currency--</option>`
        toCurrency.innerHTML = `<option value="0">--select currency--</option>`
        Object.keys(rates).forEach(code => {
            let option = document.createElement('option')
            option.innerText = code
            fromCurrency.append(option)

            option = document.createElement('option')
            option.innerText = code
            toCurrency.append(option)
        })
        fromCurrency.value = base
    }
    xhr.send()
}

let calcAmout = (amount) => {

    if ((amount < 0) || (isNaN(amount))) {
        outputAmount.innerText = `please enter a valid amount`
    } else {
        outputAmount.innerText = ``
        let resultAmount = amount * rates[toCurrency.value]
        outputAmount.innerText = resultAmount.toFixed(2)  // .toFixed(0) for integer
    }
}

inputAmount.addEventListener('keyup', () => {
    let amount = parseInt(inputAmount.value)
    if ((amount < 0) || (isNaN(amount))) {
        outputAmount.innerText = `please enter a valid amount`
    }     
    else if (fromCurrency.value != '0' && toCurrency.value != '0') {
        calcAmout(amount)
    } else if (fromCurrency.value != '0' && toCurrency.value == '0') {
        outputAmount.innerText = `please select second currency`
    } 
})

fromCurrency.addEventListener('change', () => {
    getCurrencies(fromCurrency.value)
})

toCurrency.addEventListener('change', () => {
    let amount = parseInt(inputAmount.value)
    if (inputAmount.value != '') {
        calcAmout(amount)
    }
})
