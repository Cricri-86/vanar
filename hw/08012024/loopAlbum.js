//Album of 9 pictures

let i = 1

while(i <= 9){
    document.write(`<!-- ${i} start -->`);
    document.write(`
    <img src="images/${i}-300x300.jpg">
    `)

    if (i%3 == 0){
        document.write(`<br>`);
    }

    document.write(`<!-- ${i} end -->`);
    i++

}
