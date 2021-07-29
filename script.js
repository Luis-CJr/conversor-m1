

let botao = document.getElementById("button")

let select = document.getElementById("select-moedas")



async function ConverterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()

    })

        let dolar = moedas.USDBRL.high
        let euro = moedas.EURBRL.high

        console.log(dolar)
        console.log(euro)
    

    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputreal = document.getElementById("texto-real")

    let ValorDolares = inputValorReais / dolar

    if (select.value === "$ Dólar Americano") {
        let ValorDolares = inputValorReais / dolar
        inputMoedas.innerHTML = ValorDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro") {
        let ValorEuros = inputValorReais / euro
        inputMoedas.innerHTML = ValorEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }




    inputreal.innerHTML = inputValorReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


}

function trocaDeMoeda() {

    let textoMoedas = document.getElementById("texto-moeda")
    let bandeiramoeda = document.getElementById("bandeira-moeda")

    if (select.value === "$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiramoeda.src = "./img/estados-unidos .png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiramoeda.src = "./img/euro.png"

    }

    ConverterMoedas()

}

botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", trocaDeMoeda)
