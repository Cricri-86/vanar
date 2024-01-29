let pac_x = 3
let pac_y = 3

let coin_x = 2
let coin_y = 2

let bomb_x = 1
let bomb_y = 1

let score = 0

let hp = 100

function randomCoord(){
   let coord =  parseInt(1 + Math.random() * 9)
   return coord;
}

function action() {

    console.log(event.key)
    switch (event.key) {
        case "ArrowUp": if (pac_y > 1) pac_y--; break
        case "ArrowRight": if (pac_x < 10) pac_x++; break
        case "ArrowLeft": if (pac_x > 1)  pac_x--; break
        case "ArrowDown": if (pac_y < 10) pac_y++; break
    }

    if (pac_x == coin_x && pac_y == coin_y) {
        score += 10
        coin_x = randomCoord()
        coin_y = randomCoord()
    }
    if (pac_x == bomb_x && pac_y == bomb_y) {
        hp -= 20
        bomb_x = randomCoord()
        bomb_y = randomCoord()
    }
    if(hp == 0){
        alert('Game over!')
        return
    }

    renderMap()
}



function renderMap() {
    gameMap.innerHTML = ``
    for (let y = 1; y <= 10; y++) {
        for (let x = 1; x <= 10; x++) {

            if (x == pac_x && y == pac_y) {
                gameMap.innerHTML += `<div class="pac"></div>`
            } else if (x == coin_x && y == coin_y) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } 
            else if (x == bomb_x && y == bomb_y) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            }else {
                gameMap.innerHTML += `<div class=""></div>`
            }


        }
    }

     gameScore.innerHTML = `Score: ${score} \n
     HP: ${hp}`
}

renderMap();
