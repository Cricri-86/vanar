// JS: literal object (plain object)

let order = {
    name: "Pizza",
    price: 100,
    image: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
    quantity: 0,
    available: true
}

let initialPrice = order.price

function increaseQuantity(){
    if( order.quantity < 10){
        
        order.quantity++
        order.price = `${initialPrice} * ${order.quantity} = ${initialPrice * order.quantity}`
        showOrder()
    } else
    alert(`You've reached the limit`)
    
}

function decreaseQuantity(){
    if( order.quantity > 0){
        order.quantity--
        order.price = `${initialPrice} * ${order.quantity} = ${initialPrice * order.quantity}`
        showOrder()
    }
   
}


function showOrder(){
    content.innerHTML = `
    <h2>${order.name}</h2>
    <img src="${order.image}" width="200" />
    <p>${order.price}</p>
    <p>${order.available ? 'available' : 'not available'}</p>
    ${order.available ? `<div><button onclick='increaseQuantity()'>+</button><span>${order.quantity}</span><button onclick='decreaseQuantity()'>-</button></div>` : ''}
    `
}

showOrder()
