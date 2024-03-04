let clients = ['John', 'Mary', 'Kate']

let clientsHighPriority = ['Tob', 'Pete']
let clientsLowPriority = ['Vicky', 'Lessly']


while(true){
    let clientName = prompt("Please enter the guest's name")
    if(clientName){
        let priorityCheck = confirm('Would you like a priority reservation for this guest?')
        if (priorityCheck) {
            clientsHighPriority.unshift(clientName)
        } else{
            clientsLowPriority.push(clientName)
        }
    } else {
        break
    } 
} 

function showClients() {

    for (let i = clientsHighPriority.length - 1; i >= 0; i--) {
        clients.unshift(clientsHighPriority[i])
    }

    for (let i = 0; i < clientsLowPriority.length; i++) {
        clients.push(clientsLowPriority[i])
    }

    for (let i = 0; i < clients.length; i++) {
        console.log(`
         ${i + 1}. ${clients[i]}
         `)
    }
}

showClients()
