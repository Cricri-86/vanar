let moldLeft = 225
let score = 0
const mold = document.getElementsByClassName('mold')[0]
const egg = document.getElementsByClassName('egg')[0]


//HW2: put some limits
const moveMold = (e) => {
    switch (e.code) {
        case 'ArrowRight':
            if (moldLeft == 450) {
                break
            }
            moldLeft += 5
            break
        case 'ArrowLeft':
            if (moldLeft == 0) {
                break
            }
            moldLeft -= 5
            break
    }
    mold.style.left = `${moldLeft}px`
}

const animationEnd = (e) => {

    if (e.animationName == 'move') {
        if (125 <= moldLeft && moldLeft <= 150) {
            score++

            egg.classList.remove('move')
            setTimeout(() => {
                egg.classList.add('move')
            }, 10)
        } else {
            score--
        
            //Using classList:
            //egg.classList.remove('move')
            //egg.classList.add('fall')
            // HW3: do the same using classname
            egg.className = egg.className.replace('move', 'fall')
        }
    }


    if (e.animationName == 'fall') {
        egg.classList.add('egg-broken')
    }
}

document.body.addEventListener('keydown', moveMold)
egg.addEventListener('animationend', animationEnd)
