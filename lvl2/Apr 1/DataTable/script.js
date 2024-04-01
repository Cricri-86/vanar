const search = (e, data) => {
    let phrase = e.target.value
    data.employees = data.employees.filter(employee => {
        return employee.name.startsWith(phrase)
    })
    //render(content, data)
   
}

const render = (parentElement, data) => {
    const table = document.createElement('table')
    let tr
    let td

    //column headers
    tr = document.createElement('tr')
    data.fields.forEach( key =>{
        td = document.createElement('th')
        td.innerText = key
        tr.append(td)

    })
    table.append(tr)

    // search form
    tr = document.createElement('tr')
    td = document.createElement('td')
    td.colSpan = 6

    let form = document.createElement('form')
    let input = document.createElement('input')
    input.placeholder = 'Search here...'
    input.addEventListener('keyup', (e) => search(e, data))
    form.append(input)
    td.append(form)
    tr.append(td)

    table.append(tr)

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
                            let ul = document.createElement('ul')

                            let li = document.createElement('li')


                            if (propKey === 'email') {
                                li.innerHTML = `${propKey} : <a href="mailto:${employee[prop][propKey]}">${employee[prop][propKey]}</a>`
                            } else if (propKey === 'viber') {
                                li.innerHTML = `${propKey} : <a href="viber://chat?number=${employee[prop][propKey]}">${employee[prop][propKey]}</a>`
                            } else if (propKey === 'whatsapp') {
                                li.innerHTML = `${propKey} : <a href="https://wa.me/${employee[prop][propKey]}">${employee[prop][propKey]}</a>`
                            } else if (propKey === 'phone') {
                                li.innerHTML = `${propKey} : <a href="tel:${employee[prop][propKey]}">${employee[prop][propKey]}</a>`
                            }
                            else if (propKey === 'insta') {
                                li.innerHTML = `${propKey} : <a href="https://instagram.com/${employee[prop][propKey]}">${employee[prop][propKey]}</a>`
                            } else {
                                li.innerText = `${propKey} : ${employee[prop][propKey]}`
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

}

const content = document.getElementById('content')
render(content, data)
