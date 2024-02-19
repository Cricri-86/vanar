class Product{
    //schema / structure
    constructor(name, price){
           this.name = name
           this.price = price 
    }

    //behave
    render() {
        return `
        <div>
        <h2>${this.name}</h2>
        <p>${this.price}</p>
        </div>
        `
    }

    incPrice(){
        this.price += 5
    }
}

let p1 = new Product("Salad", 20)
let p2 = new Product("Soup", 25)

p1.render()


//    NOW                         THEN 
//x----*----------------------------*------>
//     ^                            ^
//   class                          ^
//                               objects
