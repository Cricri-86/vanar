let day = parseInt(prompt('Day of the week?')); // 1..7

let calendar = parseInt(prompt('Does your week start on Monday? Yes/No'));

if (calendar === 'Yes'){
    switch( day ) {
        case 1: document.write('Mo'); break; // "1" === 1
        case 2: document.write('Tu'); break;
        case 3: document.write('Wd'); break;
        case 4: document.write('Th'); break;
        case 5: 
        let times = 3;
        while (times > 0){
            document.write('Yeeey!!! :)'); 
            times--;
        }
        document.write('Fr'); break;
        case 6: document.write('Sa'); break;
        case 7: document.write('Su'); break;
    
    }
} else {
    switch( day ) {
        case 1: document.write('Su'); break; // "1" === 1
        case 2: document.write('Mo'); break;
        case 3: document.write('Tu'); break;
        case 4: document.write('Wd'); break;
        case 5: document.write('Th'); break;
        case 6: 
        let times = 3;
        while (times > 0){
            document.write('Yeeey!!! :)'); 
            times--;
        }
        document.write('Fr'); break;
       
        case 7: document.write('Sa'); break;
    
    }
}

