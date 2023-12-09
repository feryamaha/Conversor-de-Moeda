const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConverted = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)

    const dolarToday = 4.9
    const euroToday = 5.3

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    console.log(inputCurrencyValue)
}

function changeCurrency() {
    const currencyImage = document.getElementById("currency-img")

    if (currencySelect.value == "dolar") {
        currencyImage.src = "img-dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyImage.src = "img-euro.png"
    }
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) 