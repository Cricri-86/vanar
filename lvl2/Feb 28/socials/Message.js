class Message {

    static all = []

    constructor(content, fromUser, toUser, status) {

        this.content = content
        this.fromUser = fromUser
        this.toUser = toUser
        this.status = status
        Message.all.push(this)

    }
    render() {
        console.log(`
        [${this.fromUser.name}] has sent a new message to [${this.toUser.name}]
        "${this.content}"
        Message status: ${this.status}
        `)

    }
}
