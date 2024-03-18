// shortcuts / DOM caching
const form = document.getElementById('subscribe')
const input = form.firstElementChild
const button = form.lastElementChild

// usability

button.disabled = true
const max_visible = 24
let start = 0
let ph_message = "enter your email here please...   "

setInterval(() => {
    input.placeholder = ph_message.substring(start, start + max_visible)
    start++
    if (ph_message.length - max_visible < start) {
        start = 0
    }
}, 200)




// logic

function whileTyping() {
    if (input.value.length > 3) {
        button.disabled = false
    } else {
        button.disabled = true
    }
}
function subscribe() {
    alert()
}

//event binding
input.onkeyup = whileTyping
button.onclick = subscribe
