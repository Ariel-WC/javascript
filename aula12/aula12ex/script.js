function carregar() {
    var msg = window.document.querySelector('div#msg1')
    var bom = window.document.querySelector('p#msg2')
    var img = window.document.querySelector('img#foto')
    var fundo = window.document.body
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `<p>Agora são ${hora}:${min}</p>`
    if (hora < 6 || hora > 18) {
        // BOA NOITE!!
        img.src = "noite.png"
        bom.innerHTML = `<p>Boa noite para você</p>`
        fundo.style.backgroundColor = 'rgb(55, 75, 128)'

    } else if (hora < 12) {
        // BOM DIA!!
        img.src = 'manha.png'
        bom.innerHTML = `<p>Bom dia para você</p>`
        fundo.style.backgroundColor = 'rgb(250, 239, 172)'
    } else {
        // BOA TARDE!!
        img.src = 'tarde.png'
        bom.innerHTML = `<p>Boa tarde para você</p>`
        fundo.style.backgroundColor = 'rgb(255, 185, 87)'
    }
}