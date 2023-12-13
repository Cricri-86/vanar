
food_1_name  = "Pizza"
food_1_price = 75.00
food_2_name  = "Salad"
food_2_price = 25.00
food_3_name = "Cake"
food_3_price = 20.00
food_4_name = "Drink"
food_4_price = 10.00

food_1_quantity = parseInt( prompt(`How many "${food_1_name}" do you want?`) )
food_2_quantity = parseInt( prompt(`How many "${food_2_name}" do you want?`) )
food_3_quantity = parseInt( prompt(`How many "${food_3_name}" do you want?`) )
food_4_quantity = parseInt( prompt(`How many "${food_4_name}" do you want?`) )

cost_1 = food_1_price * food_1_quantity
cost_2 = food_2_price * food_2_quantity
cost_3 = food_3_price * food_3_quantity
cost_4 = food_4_price * food_4_quantity

totalCost = cost_1 + cost_2 + cost_3 + cost_4

free_delivery = totalCost > 200

alert(
"################# FOOD ##################\n" + 
"1. " + food_1_name + "  " + food_1_price.toFixed(2)  + 
"\n2. " + food_2_name + "  " + food_2_price.toFixed(2)  + 
"\n3. " + food_3_name + "  " + food_3_price.toFixed(2)  + 
"\n4. " + food_4_name + "  " + food_4_price.toFixed(2)  + 
"\n################# FOOD ##################"
)

alert(
    "################# Bill ##################\n" + 
    "1. " + food_1_name + " x " + food_1_quantity + " = " + cost_1.toFixed(2) + 
    "\n2. " + food_2_name + " x " + food_2_quantity + " = " + cost_2.toFixed(2)  + 
    "\n3. " + food_3_name + " x " + food_3_quantity + " = " + cost_3.toFixed(2)  + 
    "\n4. " + food_4_name + " x " + food_4_quantity + " = " + cost_4.toFixed(2)  + 
    "\n------------------------------------------\n" + 
    "total: " + totalCost.toFixed(2)  +
    "\nfree delivery: " + free_delivery + 
    "\n################# Bill ##################"
    )

