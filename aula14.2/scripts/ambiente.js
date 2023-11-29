function gerarTabuada() {
    var num = document.querySelector('input#num').value
    var res = document.querySelector('div#res')

    if (num.length == 0) {
        window.alert('Digite um número!')
        res.innerHTML = 'Número inválido'
    } else if (num >= 1 || num <= 1){
        var n = Number(num)
        var mult = 1
        res.innerHTML = `Aqui está a tabuada do ${n}: \u{1F447} <br>`
        
        for (var m = mult; m <= 10; ++m) {
            var result = n * m
            res.innerHTML += `${n} x ${m} = ${result} <br>`
        }
    }
}