const friends = [
    "johny",
    "marry",
    "pete"
]

const renderFriends = (parentElement, friends) => {
    let ul = document.createElement('ul')
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement('li')
        li.innerText = friends[i]
        ul.appendChild(li)
    }
    parentElement.appendChild(ul)
}

renderFriends(document.getElementById('friendsPanel'), friends)
