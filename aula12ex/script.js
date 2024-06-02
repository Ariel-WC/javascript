function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert(`[ERRO] Insira um ano de nascimento válida!!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criaM.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultoM.png')
            } else {
                img.setAttribute('src', 'idosoM.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criaF.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultoF.png')
            } else {
                img.setAttribute('src', 'idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}