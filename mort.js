// Exo tueur en série

class Murderer{
  constructor(name, hp){
    this.name = name
    this.hp = hp
  }
}

class Features{
  constructor(name, deathProb, dodge, deathDamageprob){
    this.name = name
    this.deathProb = deathProb
    this.dodge = dodge
    this.deathDamageprob = deathDamageprob
  }
}

let Jason = new Murderer('Jason', 100)

names = ['nerd', 'sportif', 'blonde', 'aventurier', 'capitaine']
characters = []



for (let i = 0; i < 5; i++){
  prob_death = (Math.random().toPrecision(2))/2
  prob_dodge = (Math.random().toPrecision(2))/2
  prob_attack = 1 - (prob_death + prob_dodge)
  let r = Math.floor(Math.random()*5)
  let perso = new Features(names[r], prob_death, prob_dodge, prob_attack)
  characters.push(perso)
  console.log(characters[i])
}


while (Jason.hp > 0 && characters.length != 0){
  let r = Math.floor(Math.random()*characters.length)
  let survivor = characters[r]
  let rand = Math.random();
  if (rand < survivor.deathProb){
    console.log('Jason a tué ' + survivor.name)
    characters.splice(r,1)
  } else if (rand > survivor.deathProb && rand < (survivor.deathProb+survivor.dodge)){
    console.log(survivor.name + ' a esquivé et infligé 10 de dégats, les PV de Jason sont : ' + Jason.hp)

    Jason.hp -= 10
  } else {
    if (survivor != null){
      console.log( survivor.name + ' est mort mais à infligé 15 de dégats à Jason, ses PV sont : ' + Jason.hp)
    } else {
      characters.splice(r,1)
    }
    Jason.hp -= 15
    
  }
  console.log(characters)
}

if (characters.length == 0){
  console.log("Il n'y a plus de survivants, " + Jason.name + ' a gagné')
} else if( Jason.hp == 0){
  console.log('les survivants ont gagnés')
}
