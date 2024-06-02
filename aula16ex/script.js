let tab = document.querySelector('select#tab')
let Num = []
let Lin // Variável que usará para criar as opções
let res = document.querySelector('div#res')
let result = document.createElement('p')
let Uposi
function adicionarNum(){
    let Ntxt = document.querySelector('input#NTxt')
    let NReal = Number(Ntxt.value)   
    if(Num.indexOf(NReal) != -1 || Ntxt.value<1 || Ntxt.value>100 || Ntxt.length==0){
        window.alert('valor inválido ou já encontrado na lista')
    } else {
        res.innerHTML = ``
        Num.push(NReal)
        Uposi = Num.length - 1
        Lin = document.createElement('option')
        Lin.innerHTML += `o valor ${Ntxt.value} foi adicionado`
        tab.appendChild(Lin)
    }
}

function soma(n=0, total=0){
    for(let i=0;i<Num.length;i++){
        total += n + Num[i]
    }
    return total
}

function finalizarTab(){
    if (Num.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        Num.sort((a, b) => a-b)
        res.innerHTML += `<p>Ao todo, temos ${Num.length} número cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Num[Uposi]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Num[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma()}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma() / Num.length}.</p>`
    }

}

