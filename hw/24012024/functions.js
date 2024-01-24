// function that checks if a person full name is
// written correctly
// "John Doe"


//
//
function checkFullName(fullName) {
    if (fullName.startsWith(" ") || fullName.endsWith(" ")) {
        console.error("Incorrect spelling!")
    } else {
        let fragments = fullName.split(" ")
        if (fragments.length != 2) {
            console.error("Incorrect spelling!")
        } else {
            if (fragments[0].length < 2 || fragments[1] < 2) {
                console.error("Incorrect spelling!")
            } else {
                if (
                    fragments[0][0].toLowerCase() == fragments[0][0] ||
                    fragments[1][0].toLowerCase() == fragments[1][0]
                ) {
                    console.error("Incorrect spelling!")
                } else
                    console.log("Valid name!")
            }
        }
    }
}
