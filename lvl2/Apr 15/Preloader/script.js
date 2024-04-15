const setCustomInterval= (f, delayMs, maxCount) => {
    let count = 0
    let cb = () => {
        f(count)
        count++
        if(count < maxCount) {
            setTimeout(cb, delayMs)
        }
    }
    setTimeout(cb, delayMs)
}


const preloader = document.querySelector('#preloader')
const preloaderIndicator = document.querySelector('#preloader-indicator')
const STEPS = 5

setCustomInterval((c) => {
    let div = document.createElement('div')
    div.style.width = `${200 / STEPS}px`
    preloader.append(div)

    preloaderIndicator.innerText = `${100 * (c + 1) / STEPS}%`
}, 1000, STEPS)

