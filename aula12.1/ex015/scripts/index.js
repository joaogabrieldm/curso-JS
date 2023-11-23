function verificar() {
    var ano = 2023
    var anoN = Number(document.querySelector('input#ano').value)
    var idade = ano - anoN
    var sexM = document.querySelector('input#masc').checked
    var sexF = document.querySelector('input#fem').checked
    var img = document.querySelector('img#img')
    var res = document.querySelector('div#res')
    
    if (idade > 500) {
        res.innerHTML = `Opções inválidas!`
    } else if (idade > 0 && idade <= 15 && sexM) {
        res.innerHTML = `Detectamos um MENINO de ${idade} anos`
        img.src = 'imagens/menino.png'
    } else if (idade > 15 && idade <= 21 && sexM) {
        res.innerHTML = `Detectamos um JOVEM de ${idade} anos`
        img.src = 'imagens/jovemM.png'
    } else if (idade > 21 && idade <= 65 && sexM) {
        res.innerHTML = `Detectamos um ADULTO de ${idade} anos`
        img.src = 'imagens/homem.jpg'
    } else if (idade > 65 && sexM){
        res.innerHTML = `Detectamos um SENHOR de ${idade} anos`
        img.src = 'imagens/idoso.jpg'
    }else if (idade > 0 && idade <= 15 && sexF) {
        res.innerHTML = `Detectamos uma MENINA de ${idade} anos`
        img.src = 'imagens/menina.png'
    } else if (idade > 15 && idade <= 21 && sexF) {
        res.innerHTML = `Detectamos uma JOVEM de ${idade} anos`
        img.src = 'imagens/jovemF.png'
    } else if (idade > 21 && idade <= 65 && sexF) {
        res.innerHTML = `Detectamos uma ADULTA de ${idade} anos`
        img.src = 'imagens/mulher.jpg'
    } else if (idade > 65 && sexF){
        res.innerHTML = `Detectamos uma SENHORA de ${idade} anos`
        img.src = 'imagens/idosa.jpg'
    }
}