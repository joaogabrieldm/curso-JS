let num = document.getElementById('num')
let lista = document.getElementById('espaço')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        window.alert('Número inválido ou repetido, tente novamente!')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Informe um valor válido para finalizar!')
    } else {
        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }

            media = soma/tot
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}