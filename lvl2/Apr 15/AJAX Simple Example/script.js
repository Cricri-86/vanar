function search() {
    let input = document.querySelector('#search')
    let domain = input.value
    ////////COM/SERV/////

    let url = `http://ip-api.com/line/${domain}`

    //1. AJAX - prepare the request object
    let xhr = new XMLHttpRequest()

    //2. settings
    xhr.open("GET", url)

    /// event binding
    xhr.onload = function () {
        //4. get the response
        let data = xhr.responseText.split("\n")
        let country = data[1]
        let city = data[5]
        let resDiv = document.getElementById('result')
        resDiv.innerHTML = `
        found it in: <br/> 
        ${country} ${city} `

        console.log(data)
        input.value = ``
    }

    //3. send the request
    xhr.send()


}
