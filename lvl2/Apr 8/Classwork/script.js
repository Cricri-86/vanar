const checkbox = document.querySelector('form label input[type="checkbox"]')

const saveCheckbox = (e) => {
    let isChecked = e.target.checked
    localStorage.setItem('checked', isChecked)
}

const loadCheckbox = () => {
    let isChecked = localStorage.getItem('checked')
    if (isChecked == 'true') {
        checkbox.checked = true
    }
}

checkbox.addEventListener('change', saveCheckbox)
window.addEventListener('load', loadCheckbox)



// Example 2

const getDefinition = () => {
    let number = document.querySelector('.input').value

    let url = `http://numbersapi.com/${number}`

    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.addEventListener('load', () => {
        let definition = xhr.responseText
        document
        .querySelector('div')
        .innerText = definition
    })
    xhr.send()
}

document.querySelector('.input').addEventListener('keyup', getDefinition)

