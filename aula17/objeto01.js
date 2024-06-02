let amigo = {nome:'José', sexo:'M', peso: 70.0, engordar(p=0){
    console.log('engordou!')
    this.peso += p
}}
amigo.engordar(8)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)