const items = [  // Array > String
    "One i",
    "Two",
    "Three",
    "Four i",
    "Five i",
    "Six",
    "Seven",
    "Eight i",
    "Nine i"
]


const TOTAL = 9
const BTN_WIDTH = 50
let dropOpen = false
let eWidth = 0

function adapt() {
    for (let n = TOTAL; n >= 1; n--) {
        estimateWidth(n)
        if (eWidth <= innerWidth) {
            showItems(n)
            if (dropOpen) {
                navbarDrop.innerHTML = ``
                for (let i = n; i < TOTAL; i++) {
                    navbarDrop.innerHTML += `<a href="">${items[i]}</a>`
                }
            }
            break
        }
    }
}

function estimateWidth(n) {
    let text = ``
    let pad = 0
    for (let i = 0; i < n; i++) {
        text += items[i]
        pad += 2 * 10 // l+r padding
    }
    eWidth = 11.5 * text.length + pad + BTN_WIDTH//character width


}

function showItems(n) {
    navbar.innerHTML = ``
    for (let i = 0; i < n; i++) {
        navbar.innerHTML += `<a href="">${items[i]}</a>`
    }
    let remaining = TOTAL - n
    if (remaining > 0) {
        navbar.innerHTML += `<button onclick="showRemainingItems(${remaining})"><span>${remaining}</span>=</button>`
    }
}

function showRemainingItems(n) {
    //toggle = checkbox principle
    if (dropOpen) {
        navbarDrop.innerHTML = `` //close - clear
        dropOpen = false
    } else {
        for (let i = TOTAL - n; i < TOTAL; i++) {
            navbarDrop.innerHTML += `<a href="">${items[i]}</a>`
        }
        dropOpen = true
    }
}
