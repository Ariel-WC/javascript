var po = document.getElementById('po') // 'Primeira Opção', primeira opção que será removida
var select = document.getElementById('tab') // Selecionando o elemento 'Select'
function TabGer(){
    var ntTxt = document.querySelector('input#Ntxt')
    var nt = Number(ntTxt.value)
    var op = document.createElement('option')
    select.innerHTML = '' // Esvaziar a tabuada
    for (con = 1; con <= 10; con++){
        op = document.createElement('option')
        op.innerHTML = `${nt} x ${con} = ${nt*con}`
        op.value = `select${nt}`
        select.appendChild(op)
    }
}