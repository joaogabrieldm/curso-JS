function verificar() {
    var ano = 2023
    var anoN = Number(document.querySelector('input#ano').value)
    var idade = ano - anoN
    var sexM = document.querySelector('input#masc').checked
    var sexF = document.querySelector('input#fem').checked
    var img = document.querySelector('img#img')
    var res = document.querySelector('div#res')
    
    if (idade > 500 || idade < 0) { //----------------------- Sexo masculino
        res.innerHTML = `Opções inválidas!`
        document.body.style.background = 'red'
    } else if (idade > 0 && idade <= 15 && sexM) {
        res.innerHTML = `Detectamos um MENINO de ${idade} anos`
        img.src = 'imagens/menino.png'
        document.body.style.background = '#0084ff'
    } else if (idade > 15 && idade <= 21 && sexM) {
        res.innerHTML = `Detectamos um JOVEM de ${idade} anos`
        img.src = 'imagens/jovemM.png'
        document.body.style.background = '#0084ff'
    } else if (idade > 21 && idade <= 65 && sexM) {
        res.innerHTML = `Detectamos um ADULTO de ${idade} anos`
        img.src = 'imagens/homem.jpg'
        document.body.style.background = '#0084ff'
    } else if (idade > 65 && sexM){
        res.innerHTML = `Detectamos um SENHOR de ${idade} anos`
        img.src = 'imagens/idoso.jpg'
        document.body.style.background = '#0084ff'
    }else if (idade > 0 && idade <= 15 && sexF) { //----------------------- Sexo feminino
        res.innerHTML = `Detectamos uma MENINA de ${idade} anos`
        img.src = 'imagens/menina.png'
        document.body.style.background = 'pink'
    } else if (idade > 15 && idade <= 21 && sexF) {
        res.innerHTML = `Detectamos uma JOVEM de ${idade} anos`
        img.src = 'imagens/jovemF.png'
        document.body.style.background = 'pink'
    } else if (idade > 21 && idade <= 65 && sexF) {
        res.innerHTML = `Detectamos uma ADULTA de ${idade} anos`
        img.src = 'imagens/mulher.jpg'
        document.body.style.background = 'pink'
    } else if (idade > 65 && sexF){
        res.innerHTML = `Detectamos uma SENHORA de ${idade} anos`
        img.src = 'imagens/idosa.jpg'
        document.body.style.background = 'pink'
    }
}