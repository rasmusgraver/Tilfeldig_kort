// Vi har bare ett img element:
const kortElement = document.querySelector("img")

// Tilfeldig tall mellom 1 og 13:
const tall = Math.floor(Math.random()*13) + 1
kortElement.src = "kortstokk/" + tall + "_of_spades.png"


