let valores = [8, 1, 7, 2, 9]
valores.sort()
console.log(valores)
let pos = valores.indexOf(4)
if (pos == -1) {
    console.log(`valor não encontrado`)
} else {
    console.log(`o valor 4 está na posição ${pos}`)
}







/*for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let num = [1,2,3,4,5,6,7]
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/