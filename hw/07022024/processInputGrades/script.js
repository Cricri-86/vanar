//get data from the user
function readData() {
   let data = gradesInput.value
   //console.log(data)
   return data
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
   return grades
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
}


