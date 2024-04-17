// Provider component

const randInt = (cb, maxValue = 10) => {
    //image that value comes from a provider API
    setTimeout(() => {
        let value = parseInt(1 + Math.random() * maxValue)
        cb(value)  //callback of the second function
    }, Math.random() * 3000)
}

const cache = {
    steps: 5,
    timer: null
}

// Animation component
const animationStart = (value) => {
    cache.steps = value
    let steps = 5
    const container = document.getElementsByClassName('container')[0]
    container.innerHTML = `<div class="box" style="transform:rotate(0deg)"></div>`
    cache.timer = setInterval(animationStep.bind(this, cache), 500)
}

const animationStep = (cache) => {

    const box = document.getElementsByClassName('box')[0]
    let angle = parseFloat(box.style.transform.replace("rotate(", "").replace(")", ""))
    angle += 22.5
    box.style.transform = `rotate(${angle}deg)`
    cache.steps--
    if (cache.steps == 0) {
        clearInterval(cache.timer)
    }
    console.log(angle, cache.steps)
}

const animationEnd = () => {
    const container = document.getElementsByClassName('container')[0]
    container.innerHTML = ``
}

randInt(animationStart)
