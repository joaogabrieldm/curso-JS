function Contar() {
    var ini = document.querySelector('input#start').value
    var end = document.querySelector('input#end').value
    var pass = document.querySelector('input#pass').value
    var res = document.querySelector('div#res')

    if (ini.length == 0 || end.length == 0 || pass.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        var i = Number(ini)
        var f = Number(end)
        var p = Number(pass)
        
        res.innerHTML = 'Contando: <br>'
        
        if (p == 0) {
            window.alert('Impossível somar ou subtrair com 0 passos, portanto, será adicionado 1 PASSO')
            p = 1
        }
        for(var c = i; c < f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        
        for (var c = i; c > f; c -=p ) {
            res.innerHTML += `${c} \u{1F449}`
        }
        
        res.innerHTML += ` \u{1F3C1}`
    }
}