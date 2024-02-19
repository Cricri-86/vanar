//get data from the user
function readData() {
   let data = gradesInput.value
   processData(data)
}

//parses the data
//"math: physics:8.5, english: 10, ... "
//            v 
function processData(data) {
   let values = data.split(',')

   let grades = []

   for (let i = 0; i < values.length; i++) {
      let cells = values[i].split(':')

      let name = cells[0].trim()
      let grade = parseFloat(cells[1].trim())

      grades.push({
         discipline: name,
         mark: grade
      })
   }
   logData(grades)
}

//       |
//      return 
//       v
//[
// {
//    name: "math",
//    grade: 9
//  },
//  {
//    name:"physics",
//    grade: 8.5
//  },
//  ...
//]

// shows the data in the console
function logData(data) {
   console.log(data)
   let sum = 0
   for(let i = 0; i < data.length; i++){
      gradesTable.innerHTML += `<tr><td>${data[i].discipline}</td><td>${data[i].mark}</td></tr>`
      sum += data[i].mark
   }
   avg = sum / data.length
   gradesTable.innerHTML += `<tr><td><b>Average mark:</b></td><td><b>${avg}</b></td></tr>`
}


