const LEN = 20

// <---------x--------->
let rx = 10

function drawMap() {
    gameMap.innerHTML = ""
    for (x = 1; x <= LEN; x++) {
        if (x == rx) {
            gameMap.innerHTML += '▶'
        } else {
            gameMap.innerHTML += '┈'
        }
    }
}

function moveLeft() {
    if(rx > 1){
        rx--
        console.log(rx)
    }
  
}

function moveRight() {
    if(rx < LEN){
        rx++
        console.log(rx)
    }
   
}
drawMap()
