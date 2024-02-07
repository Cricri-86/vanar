// OWL, Slick, ... Bootstrap
// 1. function
// 2. ebents
// 3. Array, Number, String ..
// 4. if/else, for/while

const IMAGES = [
   "images/1-300x300.jpg", //0
   "images/2-300x300.jpg", //1 
   "images/3-300x300.jpg", //2
   "images/4-300x300.jpg", //2
   "images/5-300x300.jpg", //2
]

const TITLES = [
   "Image 1",
   "Image 2",
   "Image 3",
   "Image 4",
   "Image 5"
]

// start/current slide
let currentIndex = 0

const EFFECTS = [
   "animate__fadeInLeft",
   "animate__fadeInRight",
   "animate__bounceInLeft",
   "animate__bounceInRight"
]


function showImage(n){
   let i = Math.round(Math.random() * 5);
   carouselSlides.innerHTML = 
   `
   <img src="${IMAGES[n]}" class="animate__animated ${EFFECTS[i]}"/>
   `
}

function showTitle(n){
  carouselTitles.innerHTML = 
  `
  <h2 class="animate__animated animate__slideInUp">${TITLES[n]}</h2>
  `
}

function showIndicators(n){
   carouselIndicators.innerHTML = ``
   for(let i = 0; i < IMAGES.length; i++){
      if(i == n){
         carouselIndicators.innerHTML += `<i class="fa-solid fa-circle"></i>`
      } else {
         carouselIndicators.innerHTML += `<i class="fa-regular fa-circle"></i>`
      }
     
   }
}

function next(){
   document.querySelector('.prev').classList.remove('disabled');
   if (currentIndex < IMAGES.length - 1){
      currentIndex++
      showImage(currentIndex)
      showTitle(currentIndex)
      showIndicators(currentIndex)
      console.log(currentIndex)
      if(currentIndex == IMAGES.length - 1){
         document.querySelector('.next').classList.add('disabled');
      }
   } 
}

function prev(){
   document.querySelector('.next').classList.remove('disabled');
   if (currentIndex > 0){
      currentIndex--
      showImage(currentIndex)
      showTitle(currentIndex)
      showIndicators(currentIndex)
      if(currentIndex == 0){
         document.querySelector('.prev').classList.add('disabled');
      }
   }
}

showImage(currentIndex)
showTitle(currentIndex)
showIndicators(currentIndex)

function play(){
   setInterval( next, 3000)
}

function action() {
   switch (event.key) {
      case "ArrowLeft":
         prev()
         break

      case "ArrowRight":
         next()
         break

   }
}
