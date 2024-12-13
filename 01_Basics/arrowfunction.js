const user ={
    username: "hitesh",
    price: 399,
    greetingMessage: function(){
        console.log(`${this.username}, hello`)
        // console.log(this)
    }

}
// user.greetingMessage();
// user.username = "hero"
// user.greetingMessage()
// console.log(this)       // this fuction give empty object

// const chai1 = function () {
//     let username =  "hitesh"
//     console.log(this)
// }

// chai1()

const chai =() => { 
    let username = "chaiwallah"
console.log(this.username);
}

// chai();




