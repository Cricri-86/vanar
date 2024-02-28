class User {
    constructor(name, age, online) {
        this.name = name
        this.age = age
        this.online = online
    }
    render () {
    console.log(`
        [${this.name}] ${this.online ? '◉' : '◎'}
        `)

}
}

class Message {
    constructor(content, status, from_user, to_user) {
        this.content = content
        this.status = status
        this.from_user = from_user
        this.to_user = to_user
    }
    render () {
    console.log(`
        [${this.from_user.name}] has sent a new message to [${this.to_user.name}]
        "${this.content}"
        Message status: ${this.status}
        `)

}
}

let user_1 = new User("johny", 20, true)

let user_2 = new User("marry", 21, false)

let user_3 = new User("pete", 22, true)

let message_1 = new Message("Hi, how are you?", "sent", user_1, user_2)

let message_2 = new Message("I'm fine, thank you", "sent", user_2, user_1)

let message_3 = new Message("Hi, how are you?", "sent", user_1, user_3)
