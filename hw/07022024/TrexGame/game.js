// LEGEND:
// 0 - empty
// 1 - t-rex
// 2 - cactus
let gameMap = [0, 2, 0, 0, 1, 0, 0, 0, 2, 0]
let ti = 4
let dir = "left"
let score = 100;
//          i  0, 1, 2 ...................9

function drawMap() {
   m.innerHTML = ``
   gameScore.innerHTML = `Your score is ${score}`

   for (let i = 0; i < gameMap.length; i++) {
      if(gameMap[i] == 0){
         m.innerHTML += `<div></div>`
      } else if (gameMap[i] == 1){
         m.innerHTML += `<div class="t-rex ${dir}"></div>`
      } else if (gameMap[i] == 2){
         m.innerHTML += `<div class="cactus"></div>`
      }
       
 
   }
   if(score == 0){
      alert(`Your score is 0. Game over!`) 
    }
}

drawMap()

function action(){
   switch(event.key){
      case "ArrowLeft":   
      if(ti > 0){
         if((gameMap[ti-1])==2){
            score = score - 50
         }
      gameMap[ti] = 0
      ti--
      gameMap[ti] = 1
      dir = "left"
      drawMap()
      break
      } else break

      case "ArrowRight": 
      if(ti < gameMap.length - 1){
         if((gameMap[ti+1])==2){
            score = score - 50
         }
         gameMap[ti] = 0
         ti++
         gameMap[ti] = 1
         dir = "right"
        
         drawMap()
         break
      } else break

   }

}

