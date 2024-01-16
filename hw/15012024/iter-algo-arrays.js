// forward / backeard stepping / iteration

let food = [
  "pizza",   // 0  < start
  "salad",   // 1      |  3 items
  "soup",    // 2      v
  "polenta", // 3
  "wok",     // 4
  "shrimps", // 5  
]

let start = 0
let items = 3

console.log("+-----------------+");

// for (let i = start; i < start + items; i++) {
//   console.log('|                 |')
//   let spaces = 17 - 5 - 2 - food[i].length   // total - start spaces - " "
//   console.log(`|     "${food[i]}"${" ".repeat(spaces)}|`)
//   console.log('|                 |')
// }


let n = start;
while( n < start + items) {
  console.log('|                 |')
  let spaces = 17 - 5 - 2 - food[n].length   // total - start spaces - " "
  console.log(`|     "${food[n]}"${" ".repeat(spaces)}|`)
  console.log('|                 |')
  n++
}


console.log("+-----------------+");

//HW1:

let end = 5

console.log("+-----------------+");

// for (let i = end; i > end - items; i--) {
//   console.log('|                 |')
//   let spaces = 17 - 5 - 2 - food[i].length   // total - start spaces - " "
//   console.log(`|     "${food[i]}"${" ".repeat(spaces)}|`)
//   console.log('|                 |')
// }

let j = end;
while(j > end - items){
  console.log('|                 |')
  let spaces = 17 - 5 - 2 - food[j].length   // total - start spaces - " "
  console.log(`|     "${food[j]}"${" ".repeat(spaces)}|`)
  console.log('|                 |')
  j--
}


console.log("+-----------------+");





/*
+-----------------+
|                 |
|     "pizza"     |
|                 |
|                 |
|     "salad"     |
|                 |
|                 |
|     "soup"      |
|                 |
+-----------------+


*/

