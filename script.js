// Vi har bare ett img element:
const kortElement = document.querySelector("img")

// Tilfeldig tall mellom 1 og 13:
const tall = Math.floor(Math.random()*13) + 1

const types = ["hearts", "spades", "clubs", "diamonds"]
// Tilfeldig tall mellom 0 og 3:
const tilf_type = Math.floor(Math.random() * 4)
const type = types[tilf_type]
kortElement.src = "kortstokk/" + tall + "_of_" + type + ".png"




