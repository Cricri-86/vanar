let nume = 'Voicu';
let prenume = "Maria";
let numeComplet = `Voicu Maria`;


console.log(nume[1]);

nume[0] = "x"
console.log(nume);

// //length - lungimea unui sir
// console.log(numeComplet.length);
// // +, += - operatorii de concatenare
// console.log("lungime: " + numeComplet.length);
// //indexOf()
// console.log(nume.indexOf("m") > -1);
// //substring()
// console.log(numeComplet.substring(2, 5));
// //includes()
// console.log(numeComplet.includes('aria'));
// //replace()
// let sir = "apostrof, ghilimele, tab";
// sir = sir.replace("apo", "xxx");
// console.log(sir);
// //split()
// let arr = sir.split(",");
// console.log(arr);
// //trim()
// let val = "  doi  ";
// console.log(val, val.trim(), val.trim().length);

// let sir2 = 'ghili"mele" in sir';


//secvente escape
//  \' , \", \\, \n, \r, \t, \v

let sir = "apostrof \', ghilimele\", newLine\newLine, backlash\\, tab\t, vtab\v";
console.log(sir);

let template = `salut ${nume}.
acesta este un sir foarte lung
pentru a testa sabloanele`;
console.log(template);
