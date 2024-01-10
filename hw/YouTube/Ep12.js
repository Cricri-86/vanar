/*
while(conditie){
    instructiuni;
}
*/

// let s = 0;
// let cnt = 1;
// while(cnt <= 5){
//     s = s + cnt;
//     cnt++
// }
// console.log(s);

let valoare = 12, cnt = 0;
let arr= [3, 5, 9, 12, 7, 6];

while(cnt < arr.length){
    if(arr[cnt] == valoare){
        break;
    }
    console.log(arr[cnt]);
    cnt++;
}

let i = 3;
do{
    i+=1;
    console.log(i);
} while(i < 3);
