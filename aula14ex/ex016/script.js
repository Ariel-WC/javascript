function contarPass(){
    var Itxt = document.querySelector('input#NumIniTxt')
    var Ptxt = document.querySelector('input#NumPassTxt')
    var Ftxt = document.querySelector('input#NumFimTxt')
    var p = document.getElementById('cont')
    var res = document.getElementById('res')
    var i = Number(Itxt.value)
    var pa = Number(Ptxt.value)
    var f = Number(Ftxt.value)
    if (Itxt.value.length == 0 || Ftxt.value.length == 0 || Ptxt.value.length == 0 ) {
        p.innerHTML = `Impossível contar!`        
    } else {
        if (pa <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            pa = 1
        }
        p.innerHTML = `<p>Contando:</p>`
        if (i < f){
            while (i <= f){
                 p.innerHTML += `${i} &#x1F449 `
                i += pa
            }
        } else {
            while (i >= f){
                p.innerHTML += `${i} &#x1F449 `
               i -= pa
        }
        p.innerHTML += `&#127937`   
        }
    }

}
