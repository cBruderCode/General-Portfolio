console.log('poke.js - line 1')

// This is an example of building a Pokemon Search "web app" that probably
// does not exactly match what we did last class, but is pretty close.
// A handful of additional features have been implemented.

window.addEventListener('DOMContentLoaded', function () {
  console.log('anonymous function -- when DOMContentLoaded')

  let button = document.getElementById('go')
  button.addEventListener('click', find)

  let box = document.getElementById('pokemon')
  box.addEventListener('keypress', treatEnterAsButton)
})

function find() {
  console.log('running find')

  let box = document.getElementById('pokemon')
  let pokeName = box.value
  pokeName = pokeName.toLowerCase()
  let url = 'https://pokeapi.co/api/v2/pokemon/' + pokeName

  let sprites = document.getElementById('sprites')
  sprites.innerHTML = 'Searching...'
  let moves = document.getElementById('moves')
  moves.innerHTML = ''

  console.log('accessing API: ' + url)
  let request = new XMLHttpRequest()
  request.addEventListener('load', processPokemonJSON)
  request.responseType = 'json'
  request.open('GET', url)
  request.send()
}

function treatEnterAsButton(event) {
  console.log('key')
  if (event.key === 'Enter') {
    find()
  }
}

function processPokemonJSON() {
  console.log('running processPokemonJSON')
  console.log('this.response below')
  console.log(this.response)

  let sprites = document.getElementById('sprites')
  let moves = document.getElementById('moves')

  if (this.status !== 200) {
    let message = 'Sorry, a pokemon character with that name was not found'
    sprites.innerHTML = message
    moves.innerHTML = message
    return
  }

  sprites.innerHTML = ''
  let stringType = typeof ''
  for (let [name, url] of Object.entries(this.response.sprites)) {
    if (url && typeof url === stringType) {
      sprites.innerHTML += `<img src="${url}" alt="${name}">`
    }
  }
  if (!sprites.innerHTML) {
    sprites.innerHTML = 'No sprites could be located'
  }

  moveNames = []
  for (let moveInfo of this.response.moves) {
    moveNames.push(moveInfo.move.name)
  }
  moveNames.sort()

  moves.innerHTML = ''
  for (let moveName of moveNames) {
    moves.innerHTML += `<div class=move>${moveName}</div>`
  }
}

console.log('poke.js - line n')
