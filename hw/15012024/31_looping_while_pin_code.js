// DATA
const PIN = "1234"

let pin = ""
let tries = 0
let balance = 1000000.00



while (true) {

  pin = prompt("ENTER PIN: ")

  if (pin == PIN) {
    alert(`ACCESS GRANTED!!! \n\n
    your balance: ${balance}MDL
    `
    )
    let money = +prompt('WITHDRAW: ?')

    //HW1

    let max = 50000.00

    while (money > max) {
      money = +prompt(`PLEASE CHOOSE AN AMOUNT LESS THAN ${max}`)
    }
      if (money < balance) {
        balance -= money //balance = balance - money
        alert(`SUCCESS!!!\n\n
        your balance: ${balance}MDL
        `)
      } else {
        alert('NOT ENOUGH BALANCE!!!')
      }
    

  //////////////////////////

  //////////////////////////
  break
} else {
  alert('WRONG PIN!!!')
  if (tries == 3) {
    alert('CARD BLOCKED!!!')
    break //force WHILE stop
  }
}
tries++
}



