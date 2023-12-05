
//cria a "classe hero"
class hero{
    constructor(nome, idade, tipo, arma){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.arma = arma
    }

 //cria função/método "atacar"     
    atacar(){
    console.log(`O ${this.tipo} atacou usando ${this.arma}.`)
    }
}

//cria dois objetos, instâncias da classe hero
let guerreiro = new hero("Goku",30,"guerreiro","espada")
let ninja = new hero("Donatelo",28,"ninja","shuriken")

//chama a função "atacar" a partir dos objetos
guerreiro.atacar()
ninja.atacar()
