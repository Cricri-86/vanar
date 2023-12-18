
food_1_name = "Pizza"
food_1_price = 75.00
food_1_available = 5

food_2_name = "Salad"
food_2_price = 25.00
food_2_available = 5

food_3_name = "Cake"
food_3_price = 20.00
food_3_available = 3

food_4_name = "Drink"
food_4_price = 10.00
food_4_available = 10


food_1_quantity = parseInt(prompt(`How many "${food_1_name}" do you want?`))

if (food_1_quantity <= food_1_available) {
    cost_1 = food_1_price * food_1_quantity
} else {
    alert('Sorry, we can offer only: ' + food_1_available);
    cost_1 = 0
    food_1_quantity = 0
}


food_2_quantity = parseInt(prompt(`How many "${food_2_name}" do you want?`))

if (food_2_quantity <= food_2_available) {
    cost_2 = food_2_price * food_2_quantity
} else {
    alert('Sorry, we can offer only: ' + food_2_available);
    cost_2 = 0
    food_2_quantity = 0
}


food_3_quantity = parseInt(prompt(`How many "${food_3_name}" do you want?`))

if (food_3_quantity <= food_3_available) {
    cost_3 = food_3_price * food_3_quantity
} else {
    alert('Sorry, we can offer only: ' + food_3_available);
    cost_3 = 0
    food_3_quantity = 0
}


food_4_quantity = parseInt(prompt(`How many "${food_4_name}" do you want?`))

if (food_4_quantity <= food_4_available) {
    cost_4 = food_4_price * food_4_quantity
} else {
    alert('Sorry, we can offer only: ' + food_4_available);
    cost_4 = 0
    food_4_quantity = 0
}


totalCost = cost_1 + cost_2 + cost_3 + cost_4

delivery_price = 30.00
free_delivery = totalCost > 200

if (free_delivery) {
    delivery_text = "\nFree delivery for orders over 200.00" +
        "\nDelivery cost: FREE"
} else {
    delivery_text = "\nFree delivery for orders over 200.00" +
        "\nDelivery cost: " + delivery_price.toFixed(2) +
        "\nTOTAL incl. delivery: " + parseInt(totalCost + delivery_price)
}

alert(
    "################# FOOD ##################\n" +
    "1. " + food_1_name + "  " + food_1_price.toFixed(2) +
    "\n2. " + food_2_name + "  " + food_2_price.toFixed(2) +
    "\n3. " + food_3_name + "  " + food_3_price.toFixed(2) +
    "\n4. " + food_4_name + "  " + food_4_price.toFixed(2) +
    "\n################# FOOD ##################"
)


alert(
    "################# Bill ##################\n" +
    "1. " + food_1_name + " x " + food_1_quantity + " = " + cost_1.toFixed(2) +
    "\n2. " + food_2_name + " x " + food_2_quantity + " = " + cost_2.toFixed(2) +
    "\n3. " + food_3_name + " x " + food_3_quantity + " = " + cost_3.toFixed(2) +
    "\n4. " + food_4_name + " x " + food_4_quantity + " = " + cost_4.toFixed(2) +
    "\n------------------------------------------\n" +
    "Total: " + totalCost.toFixed(2) +
    delivery_text +
    "\n################# Bill ##################"
)





