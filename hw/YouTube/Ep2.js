let numar = 3;
console.log(typeof numar);
numar = 'patru';
console.log(typeof numar);

//string

let nume = 'ion popescu';
nume = "andrei voicu";
console.log(typeof nume);

//number 
let varsta = 17;
console.log(typeof varsta);

//boolean 
let major = true;
console.log(typeof major);

//null
let mesaj = null;
console.log(typeof mesaj);

//undifined
let test;
console.log(test, typeof test);

//Symbol
let sim = Symbol();
console.log(typeof sim);

//Tipuri referinta
//array, obiecte, functii, date calendaristice 
//orice alta valoare care nu este de tip primitiv

let numere = [1, 2, 3];
console.log(typeof numere);

let adresa = {
    oras: 'Timisoara',
    judet: 'Timis'
};
console.log(typeof adresa, adresa);
