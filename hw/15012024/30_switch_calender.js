// Choose calender type and day of the week

let calender = parseInt(prompt('Choose A or B'));
let day = parseInt(prompt('Day of the week?')); // 1..7


if (calender == "B") {
  day--
  if (day == 0) {
    day = 7
  }
}

switch (day) {
  case 1: document.write('Mo'); break; // "1" === 1
  case 2: document.write('Tu'); break;
  case 3: document.write('Wd'); break;
  case 4: document.write('Th'); break;
  case 5: document.write('Fr'); break;
  case 6: document.write('Sa'); break;
  case 7: document.write('Su'); break;

  default: document.write('Are you drunk?'); break;

}
