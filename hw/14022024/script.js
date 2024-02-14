const N_FLAKES = 50

//Array of numbers
let flakes_x = [
   
]

let flakes_y = [
  
]

let snowStatus = true

function generateCoords() {
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_x[i] = parseInt(Math.random() * 500)
        flakes_y[i] =  -parseInt(Math.random() * 500)
    }
    snowStatus = true
    console.log(snowStatus)
}

function drawFlake(i) {
    snowContainer.innerHTML += `
    <div class="flake"
    style = "left: ${flakes_x[i]}px;
             top: ${flakes_y[i]}px   
    "></div>
    `
}

function drawAllFlakes() {
    snowContainer.innerHTML = ``
    for (let i = 0; i < N_FLAKES; i++) {
        drawFlake(i)
    }

}

function fall(){
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_y[i] += 5
        if(flakes_y[i] > 500){
            flakes_y[i]=  -parseInt(Math.random() * 500)
        }
    }

    drawAllFlakes();
   
}


generateCoords()

function stop() {
    clearInterval(fallTimer)
    snowStatus = false
    console.log(snowStatus)
}

let fallTimer = setInterval(fall, 20)

