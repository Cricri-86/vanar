// average grade calc

// manual testing
// g1 = 10
// g2 = 10
// g3 = 8

// gAvg = (g1 + g2 + g3) / 3

// automation testing
test_data = [
  // g1    g2   g3   gAvg
    [10,  10,   10,  10],                  //0
    [5,    6,    7,  6 ],                  //1
    [9,    9,   10,  9.333333333333334],   //2
    ["9", "9", "10",  9.333333333333334]   //3
]

console.log("testing the formula:")
for(let it = 0; it < test_data.length; it++){
    gAvg = (test_data[it][0] + test_data[it][1] + test_data[it][2]) / 3 
    if(gAvg === test_data[it][3]){
      console.log(`test ${it+1} passed!`)
    } else {
      console.log(`test ${it+1} failed!`)
    }
}
