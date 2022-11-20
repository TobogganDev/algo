for (i = 0; i < 10; i++){
  let div = document.createElement('div')
  div.className = 'wood'
  document.querySelector('.container-game').appendChild(div)
}

let batons = document.querySelectorAll('.wood')
let btn = document.querySelector('.next-player')
let player = document.querySelector('.player')
let score = 0

batons.forEach((x,i) => {
  batons[i].addEventListener('click', function(){
    if(score < 3)
      batons[i].classList.add('hide')
      score++
      player.innerHTML = score
  })
})