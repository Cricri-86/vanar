const form = document.getElementById('foodForm')

let data = [
    {
        name: "Pizza",
        barCode: "1234561"
    },
    {
        name: "Soup",
        barCode: "1234562"
    },
    {
        name: "Salad",
        barCode: "1234563"
    },
    {
        name: "Bread",
        barCode: "1234564"
    },
    {
        name: "Cake",
        barCode: "1234565"
    }]

let virtualDOM = {

}

//render

data.forEach(food => {
    let label = document.createElement('label')
    let text = document.createTextNode(food.name)
    let input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    //input.setAttribute('data-barcode', food.barCode)
    virtualDOM[food.barCode] = input

    label.append(input, text)
    foodForm.append(label)

})

//search

let input2 = virtualDOM['1234563']
console.log(input2)


/// EXAMPLE 2  DOM Caching

const container = document.getElementsByClassName('container')[0]

const onkey = () => {
console.log('test')
}

///// CREATE DOM FRAGMENT HERE
///  cache
///// v
let input = document.createElement('input')
input.setAttribute('placeholder', 'your phonenumber here')
input.style.padding = '10px'
input.style.borderRadius = '5px'
input.style.border = '1px solid #666'
input.style.outline = 'none'
input.addEventListener('keyup', onkey)
//   /DOM fragment END


const show = () => {
    container.append(input)
}

const hide = () => {
    container.removeChild(input)
}



