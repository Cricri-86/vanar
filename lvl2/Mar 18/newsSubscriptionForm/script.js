const options = ["Political", "Economics", "IT", "Science", "Sport"]

const init = () => {
    let btn = document.querySelector('#btn-subscribe')
    btn.setAttribute('disabled', true)

    renderOptions(options)

    //css attribute selectors
    let agreeCheckbox = document.querySelector('[name="terms"]')
    agreeCheckbox.onchange = agreementCheckboxHandler

}

const renderOptions = (options) => {

    options.forEach(option => {
        let optionsDiv = document.getElementById('options')
        let input = document.createElement('input')
        //input.type = "checkbox"
        input.setAttribute('type', 'checkbox')
        input.setAttribute('name', `option_${option.toLowerCase().replace(" ", "_")}`)
        //<input type="checkbox" name= "option_1" /> Option 1

        let text = document.createTextNode(option)
        let br = document.createElement('br')
        optionsDiv.appendChild(input)
        optionsDiv.appendChild(text)
        optionsDiv.appendChild(br)
    });

}

const agreementCheckboxHandler = () => {
    let agreeCheckbox = document.querySelector('[name="terms"]')
    let btn = document.querySelector('#btn-subscribe')
    if (agreeCheckbox.checked) {
        btn.removeAttribute('disabled')
        renderAgreementText("You've agreed to the terms and conditions")
    } else {
        btn.setAttribute('disabled', true)
        renderAgreementText("You must agree with the terms and conditions")
    }
}

const renderAgreementText = (text) => {
    let agreeLabel = document.getElementById('terms')
    let textNode = document.createTextNode(text)
    agreeLabel.removeChild(agreeLabel.lastChild)
    agreeLabel.appendChild(textNode)
}

window.onload = init
