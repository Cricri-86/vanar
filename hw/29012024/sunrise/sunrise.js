function adjustSun() {
    let hour = +inputHour.value
    const K = 100 / 12
    const KC = 255 / 12


    if (hour >= 6 && hour <= 12) {

        hourK = (hour - 6)

    } else if (hour > 12 && hour <= 18) {

        hourK = (18 - hour)

    }

    if (hour >= 6 && hour <= 18) {
        let left = K * (hour - 6)
        sun.style.left = `${left}%`

        let cred = 100 + 3 * KC * hourK
        let cgreen = 50 + 4 * KC * hourK

        let ered = 50 + 2 * KC * hourK
        let egreen = 20 + 2 * KC * hourK

        let bottom = 50 * hourK

        let skyred = 0 + 0.4 * KC * hourK
        let skygreen = 10 + 2 * KC * hourK
        let skyblue = 100 + 2 * KC * hourK

        sun.style.bottom = `${bottom}px`

        sun.style.background = `radial-gradient(rgb(${cred}, ${cgreen}, 0), rgb(${ered}, ${egreen}, 0))`

        sky.style.background = `linear-gradient(rgb(${skyred}, ${skygreen}, ${skyblue}), rgb(0, 0, ${skyblue}))`


    }
}
