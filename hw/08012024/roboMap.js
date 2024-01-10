// 2D map

let rx = 8;
let ry = 5;

let sx = 3;
let sy = 8;

// line x 10

document.write(`<div style="line-height: 52px;
font-size: 50px;
font-family: monospace;">`);

for (let y = 1; y <= 10; y++) {
    // dot x 10
    for (let x = 1; x <= 10; x++) {
        if (x == rx && y == ry) {
            document.write(`R`);
        } else if (x == sx && y == sy) {
            document.write(`S`);
        }

        else {
            document.write(`   .   `);
        }
    }
    document.write(`<br>`);
}
//dot x 10

document.write(`</div>`);
