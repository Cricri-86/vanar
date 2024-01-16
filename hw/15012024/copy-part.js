// copy an array partialy

//                   +-------+ 
//                   v       v 
// original = [ 10, 20, 30, 40, 50]
//                       v
// copy     = [ 20, 30, 40, ... ]

let original = [10, 20, 30, 40, 50]
let copy = []

for (let i = 1; i < 1 + 3; i++) {
  copy[i - 1] = original[i];
}

console.log(original)
console.log(copy)



//HW1:       
//                   v       v        v
// original2 = [ 10, 20, 30, 40, 50, 60]
// copyEven     = [ 20, 40, 60]
//  
//HW2:                     
//                v       v       v
// original2 = [ 10, 20, 30, 40, 50, 60]
// copyOdd     = [ 10, 30, 50]
//
//HW3                    <-------end
//                       v   v    v
// original2 = [ 10, 20, 30, 40, 50, 60]
// copyOdd     = [ 50, 40, 30]



//HW1

let original2 = [10, 20, 30, 40, 50, 60]


//Even

let copyEven = []
let evenStart = 1
let evenCounter = 0


for (let i = evenStart; i < original2.length; i += 2) {
  copyEven[i - evenStart - evenCounter] = original2[i];
  evenCounter++
}

//Using while
// let i = evenStart;
// while(i < original2.length){
//   copyEven[i - evenStart - evenCounter] = original2[i];
//   evenCounter++
//   i+=2
// }


console.log(copyEven)

//HW2
//Odd
let copyOdd = []
let oddStart = 0
let oddCounter = 0

for (let i = oddStart; i < original2.length; i += 2) {
  copyOdd[i - oddStart - oddCounter] = original2[i];
  oddCounter++
}

//Using while
// let i = oddStart;
// while(i < original2.length){
//   copyOdd[i - oddStart - oddCounter] = original2[i];
//   oddCounter++
//   i += 2
// }



console.log(copyOdd)


//HW3

let copyEnd = []
let endItem = 4;

for (let i = endItem; i > endItem - 3; i--) {
  copyEnd[endItem - i] = original2[i];
}

//Using while
// let i = endItem
// while(i > endItem - 3){
//   copyEnd[endItem - i] = original2[i];
//   i--
// }

console.log(copyEnd)

