
let user1 = new User("johny", 20, 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light', true)
let user2 = new User("marry", 21, 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Cry&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=DarkBrown', false)
let user3 = new User("pete", 22, 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=BeardMajestic&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Cry&eyebrowType=UpDown&mouthType=Serious&skinColor=Yellow', true)

let message1 = new Message("Hi, how are you?",  user1, user2, "sent")
let message2 = new Message("I'm fine, thank you", user2, user1, "sent")
let message3 = new Message("Hi, how are you?", user1, user3, "sent")



