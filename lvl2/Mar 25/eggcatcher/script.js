let moldLeft = 225
let score = 0
const mold = document.getElementsByClassName('mold')[0]
const eggs = document.getElementsByClassName('egg')
const scoreDiv = document.getElementsByClassName('score')[0]
let duration = 5
let step = 5

//HW2: put some limits
const moveMold = (e) => {
    switch (e.code) {
        case 'ArrowRight':
            if (moldLeft <= 500 - step - 50)   // 50 = mold width
                moldLeft += step
            break
        case 'ArrowLeft':
            if (moldLeft >= 0 + step)
                moldLeft -= step
            break
    }
    mold.style.left = `${moldLeft}px`
}

const animationEnd = (e) => {
    let egg = e.target
    if (e.animationName == 'move') {
        if
            (
            (125 <= moldLeft && moldLeft <= 150
                &&
                //egg.classList.contains('left')   <- using classList
                egg.className.includes('left')
            ) ||
            (305 <= moldLeft && moldLeft <= 330
                &&
                //egg.classList.contains('right')  <- using classList
                egg.className.includes('right')
            )
        ) {
            score++

            egg.classList.remove('move')
            setTimeout(() => {
                egg.classList.add('move')
            }, 10)
            duration--
            if (duration <= 0)
                duration = 0.5
            egg.style.setProperty('animation-duration', `${duration}s`)
        } else {
            score--
            //Using classList:
            //egg.classList.remove('move')
            //egg.classList.add('fall')
            egg.className = egg.className.replace('move', 'fall')
            egg.style.removeProperty('animation-duration')
        }

        duration--
        if (duration <= 0)
            duration = 0.5
        egg.style.animationDuration = `${duration}s`
    }

    if (e.animationName == 'fall') {
        egg.classList.add('egg-broken')
    }
    scoreDiv.innerHTML = `score: ${score}`

}


document.body.addEventListener('keydown', moveMold)


//Bind event listening to every egg

const eggElements = [...eggs]

eggElements.forEach((egg) => {
    egg.addEventListener('animationend', animationEnd)
})
