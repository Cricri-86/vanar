// let a = '16';
// let b = 8;
// console.log(typeof a);
// console.log(typeof b);

// console.log(a + b);

// console.log(a - b);

// console.log(a / b);

// console.log(b - 'trei');

// let val = b - '3';
// console.log(isNan(val), typeof val);

a = parseInt('8');
b = parseFloat('2.5');
console.log(a + b);

let c = Numver('a25');
console.log(typeof c, c);

//2.conversii la tipul string
//toString, String
let rez = String(123);
rez = String(5.3 + 2);
//console.log(rez, typeof rez);

rez = String(null);
console.log(rez); //null

rez = String(undefined);
console.log(rez); //NaN

rez = String(true);
console.log(rez); // "true"

rez = (123).toString();
console.log(rez, typeof rez);

//3. conversii la tipul boolean
let result = Boolean('');
console.log(result, typeof result);

result = Boolean(0);
console.log(result, typeof result);

result = Boolean(undefined);
console.log(result); //false

result = Boolean(null);
console.log(result); //false

result = Boolean(NaN);
console.log(result); //false

result = Boolean('salut');
console.log(result);

result = Boolean(10);
console.log(result);
