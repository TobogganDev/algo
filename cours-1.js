/*
EXO IF ://///////////////////////////

const a = 1;
const b = 4;
const c = 2;


if (a === b) {
    console.log('c egal');
}

if (c < b && a + c !== 3) {
    console.log('ok');
} else {
    console.log('c raté');
}
*/
/*
EXO SWITCH ://///////////////////////////

const a = 4;
const b = 2;
const c = 3;

switch (a){
    case b :
        console.log('égal a b');
        break;
    case c : 
        console.log('égal a c');
        break;
    default :
    console.log('egal a r');

}
*/
/*
EXO FOR ://///////////////////////////
var a = 5;
for (let i = 0; i < a; i++) {
    console.log('oklm');

}
*/
/*
EXO WHILE ://///////////////////////////

let a = 3;

while (a < 9) {
    a++
    if (a == 7) {
        continue
    }
    if (a == 8) {
        break
    }
    console.log(a)
}
console.log('j\'ai cassé la boucle de '+ a +' tours');
*/

// var a = 'Jean';
// var b = 'Jean';
// result = verif(a, b);


// function verif (nom1, nom2) {
//   return nom1 === nom2
// }
// console.log(result)

// let names = []

// names.push('Vincent', 'Paul', 'Arthur')

// names.forEach((e)=>{
//   console.log(e + " va à la pêche")
// })
// console.log(names)

// class Pokemon {
//   constructor(name, attack, defense, hp, luck){
//     this.name = name
//     this.attack = attack
//     this.defense = defense
//     this.hp = hp
//     this.luck = luck
//   }

//   get isLucky(){
//     if (Math.random() > this.luck){
//       return true
//     } else {
//       return false
//     }
//   }

//   static attackPokemon(otherPoke){
//     if (this.luck){
//       let damages = this.attack - otherPoke.defense
//       otherPoke.hp -= damages
//     }
//   }
// }

// let pikachu = new Pokemon('pikachu', 15, 12, 10, 0.5)
// let bulbizar = new Pokemon('bulbizar', 10, 15, 11, 0.3)

// while (pikachu.hp > 0 || bulbizar.hp > 0){
//   pikachu.attackPokemon(bulbizar)
//   console.log(bulbizar.hp)
// }


