
const renderCache = {

}


const search = (e, data) => {
    let phrase = e.target.value
 
    data.employees = data.employees.filter(employee => {
        return employee.name.startsWith(phrase)
    })

    render(content, data)

}

const render = (parentElement, data) => {
    parentElement.innerHTML = ''
    const table = document.createElement('table')
    let tr
    let td
    let input

    //column headers
    if (renderCache.headers) {
        tr = renderCache.headers
    } else {
        tr = document.createElement('tr')
        data.fields.forEach(key => {
            td = document.createElement('th')
            td.innerText = key
            tr.append(td)

        })
        renderCache.headers = tr
    }
    table.append(tr)


    // search form

    if (renderCache.searchForm) {
        tr = renderCache.searchForm
    } else {
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.colSpan = 6

        let form = document.createElement('form')
        let input = document.createElement('input')
        input.placeholder = 'Search here...'
        input.addEventListener('keyup', (e) => {search(e, data)})
        form.append(input)
        td.append(form)
        tr.append(td)

        renderCache.searchForm = tr
    }

    table.append(tr)

    input = tr.firstElementChild.firstElementChild.firstElementChild




    //employee rows
    data.employees.forEach(
        employee => {

            tr = document.createElement('tr')

            Object.keys(employee).forEach(

                prop => {

                    td = document.createElement('td')
                    if ((prop !== 'photo') && (prop !== 'contacts')) {
                        td.innerText = employee[prop]
                    } else if (prop == 'photo') {

                        let img = document.createElement('img')
                        img.src = employee[prop]
                        td.append(img)
                    } else {

                        Object.keys(employee[prop]).forEach(propKey => {
                            let val = employee[prop][propKey]

                            let ul = document.createElement('ul')

                            let li = document.createElement('li')


                            if (propKey === 'email') {
                                li.innerHTML = `${propKey} : <a href="mailto:${val}">${val}</a>`
                            } else if (propKey === 'viber') {
                                li.innerHTML = `${propKey} : <a href="viber://chat?number=${val}">${val}</a>`
                            } else if (propKey === 'whatsapp') {
                                li.innerHTML = `${propKey} : <a href="https://wa.me/${val}">${val}</a>`
                            } else if (propKey === 'phone') {
                                li.innerHTML = `${propKey} : <a href="tel:${val}">${val}</a>`
                            }
                            else if (propKey === 'insta') {
                                li.innerHTML = `${propKey} : <a href="https://instagram.com/${val}">${val}</a>`
                            } else {
                                li.innerText = `${propKey} : ${val}`
                            }


                            ul.append(li)
                            td.append(ul)
                        })


                    }
                    tr.append(td)
                }
            )
            table.append(tr)
        })

    parentElement.append(table)

    input.focus()

}

const content = document.getElementById('content')
render(content, data)
