let numere = [1, 2, 3, "patru", false];
console.log(numere);

//length - numarul de elemente din array
console.log(`lungime: ${numere.length}`);

numere[0] = 5;
console.log(numere);

numere[numere.length - 1] = true;
console.log(numere);

for(let i = 0; i < numere.length; i++){
    console.log(numere[i]);
}

