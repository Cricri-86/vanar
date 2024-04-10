let messages = JSON.parse(localStorage.getItem("messages"))
if (!localStorage.getItem("messages")) {
    messages = []
}

const badWords = ["tomato", "hotdog"]

const render = (messages) => {

    let list = document.getElementById('messages-list')

    list.innerHTML = ``

        messages.forEach(message => {
            let li = document.createElement('li')

            // preprocess render text
            // String.replace
            if (message.includes(':)')) {
                message = message.replace(':)', '')
                let image = document.createElement('img')
                image.src = 'images/1-300x300.jpg'
                li.innerText = message
                li.appendChild(image)
            } else {
                li.innerText = message
            }

            list.appendChild(li)
        })

}

const send = () => {
    let input = document.getElementById('message-input')
    let message = input.value.trim()
    if (message != '') {

        badWords.forEach(word => {
            if (message.toLowerCase().includes(word)) {
                message = '[censored]'
            }
        })

        messages.unshift(message)

        //// KEEPING ONLY 10
        if (messages.length > 10) messages.pop()

        ///// store data ///
        localStorage.setItem("messages", JSON.stringify(messages))

        input.value = ""
    }
}

render(messages)

