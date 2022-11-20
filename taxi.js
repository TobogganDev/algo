// Exo taxi 

let radio = ['Anissa - Wejdene', 'Vapo Vapo - Mandragora', 'Codeine - Mandragora', 'Pon de Replay - Ajak', 'La tournée du patron - Sebastien Patoche']

class Personnage {
  constructor(name, mentalIll){
    this.name = name
    this.mentalIll = mentalIll
  }
}

let john = new Personnage('John', 10)
let change = 0;
console.log(john)
for (let i = 30; i > 0; i--){
  console.log((i) + ' feux restants')
  let r = Math.floor(Math.random()*5)
  let music = radio[r]
  console.log(music)
  if (music == 'Anissa - Wejdene'){
    change++
    john.mentalIll --
  }
  console.log(john)
  if (john.mentalIll == 0){
    console.log('Explosion')
    break
  }
}
if (john.mentalIll != 0){
  console.log(john.name + ' est arrivé, avec ' + change + ' changements et une santé mentale de ' + john.mentalIll)
}