
const profile = {
    userName: "johny",
    avatar: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    online: true,
    friendsCount: 1000,
    rating: 4.5
}

// PROFILE UI COMPONENT
const renderProfile = (profile) => {
    const rootElement = document.getElementById("profileRootElement")

    let h3 = document.createElement("h3")
    h3.innerText = profile.userName
    rootElement.appendChild(h3)
}
//----------
renderProfile(profile)



// BUTTON COMPONENT
let likesCounter = 0
const renderLikeBtn = (rootElement) => {

    let btn = document.createElement("button")
    btn.setAttribute('id', 'likeBtn')

    btn.innerText = 'Like'
    btn.onclick = likePost

    rootElement.appendChild(btn)
}



const likePost = () => {
    likesCounter++
    document.getElementById('likeBtn').innerText = `${likesCounter} Likes`
}

renderLikeBtn(document.getElementById('post'))
