let likes = localStorage.getItem("likes")

function like () {
    likes ++
    render()
    localStorage.setItem("likes", likes)
}

function render() {
    let btn = document.getElementById('likeBTN')

    if (likes == null){
        btn.innerText = `Likes 0 :(`
    } else if (likes < 100){
        btn.innerText = `Likes ${likes}`
    }   else if ((likes < 1000)&&(likes < 1000000)){
        btn.innerText = `Likes ${(likes/1000).toFixed(1)}K`
    } else if (likes > 1000) {
        btn.innerText = `Likes ${(likes/1000000).toFixed(1)}M`
    }

}

render()
