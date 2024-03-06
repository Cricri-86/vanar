class User {


    // ----------STATIC
    //holds all the User objects
    static all = []

    static findByName(name) {
        return User.all.find(user => user.name === name)
    }

    static findByAgeRange(minAge, maxAge) {

        if (minAge == null) {
            return User.all.filter(user => user.age <= maxAge)
        } else if (maxAge == null) {
            return User.all.filter(user => user.age >= minAge)
        } else
            return User.all.filter(user => (user.age >= minAge && user.age <= maxAge))

    }

    //------------PROTOTYPE
    constructor(name, age, avatar, online) {
        this.name = name
        this.age = age
        this.avatar = avatar
        this.online = online
        this.friends = []
        this.sentMessages = []
        this.receivedMessages = []


        User.all.push(this)
    }
    //----------FRIENDS RELATED
    addFriend(user) {

        if (this.friends.find(userFriend => userFriend === user)) {
            console.log('No!')
        } else {
            this.friends.push(user)
            user.friends.push(this)
        }
    }

    addFriendByName(name) {
        let user = User.findByName(name)
        this.friends.push(user)
        user.friends.push(this)
    }

    removeFriend(user) {

        if (this.friends.find(userFriend => userFriend === user)) {
            this.friends = this.friends.filter(userFriend => userFriend != user)
            user.friends = user.friends.filter(userFriend => userFriend != this)
        }
    }
    removeFriendByName(name) {

        let user = User.findByName(name)

        if (this.friends.find(userFriend => userFriend === user)) {
            this.friends = this.friends.filter(userFriend => userFriend != user)
            user.friends = user.friends.filter(userFriend => userFriend != this)
        }
    }

    findFriendByName(name) {
        return this.friends.find(user => user.name === name)
    }

    // MESSAGE RELATED

    sendMessage(messageContent, user) {
        let message = new Message(messageContent, this, user, null)
        this.sentMessages.push(message)
        user.receivedMessages.push(message)
    }


    render() {
        console.log(`
        [${this.name}] ${this.online ? '◉' : '◎'}
        `)

    }
}
