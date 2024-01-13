// swapping
// triangle algo

//--------------
driverSeat = "John"
passengerSeat = "Marry"

temp = passengerSeat
passengerSeat = driverSeat
driverSeat = temp


/*
      "Marry"                 "John"
    driverSeat----------> passengerSeat
            ^           /
             \         /
              \       /
               \     /
                \   v
                temp
                "John"


*/


// index:       0       1
//              v       v
let seats = ["John", "Marry"]  // <----Array of Strings

// temp     = seats[0]
// seats[0] = seats[1]
// seats[1] = temp

//reverse:


temp     = seats[1]
seats[1] = seats[0]
seats[0] = temp



let seats2 = ["John", "Marry", "Peter", "Jane"]  // <----Array of Strings

//HW2:
temp     = seats2[1]
seats2[1] = seats2[3]
seats2[3] = temp

//HW3:
let seats3 = ["John", "Marry", "Peter", "Jane"] 
index1 = +prompt('Enter the first place you would like to change');
index2 = +prompt('Enter the second place you would like to change');

temp = seats3[index1]
seats3[index1] = seats3[index2]
seats3[index2] = temp
console.log(seats3);
