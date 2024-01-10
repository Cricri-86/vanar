/*
if(conditie){
    console.log("conditia este adevarata");
}
*/

let input = parseInt(prompt("ce varsta ai?"));
if (isNaN(input)){
    console.log("Eroare > Nu ai introdus un numar");
} else{
    if(input  < 4){
        console.log("Esti prea mic. Mergi pe jos.");
    }
     else if (input  > 85){
        console.log("Esti prea batran. Cheama un taxi");
     } else if (input >= 4 && input < 16){
        console.log("Mergi cu bicicleta");
     } else if (input == 16 || input == 17){
        console.log("Mergi cu sceterul");
     } else{
        console.log("Mergi cu masina");
     }
}

// <. >, <=, >=, ==, ===, != (operatorii de comparatie

//&& - si, || - sau, ! - nu (operatorii logici)

let raspunsuri = ['da', 'nu', 'evident', 'foarte probabil', 'te poti baza pe asta', 'fara indoiala'];

let intrebare = prompt("Intrebarea este: ");
if(intrebare){
    let ndx = Math.floor(Math.random()*6);
    console.log(`Raspunsul este: ${raspunsuri[ndx]}`);

} else{
    console.log("ai anulat");
}

