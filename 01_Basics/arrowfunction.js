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


//++++++++++++++++++++++++//
// if we use cruly brackets then we have to use return type
 const addTwo  = (num1, num2)=>{
   return num1 + num2;
 }

 const add = (num1, num2) => (num1 + num2)

//  if we want to return object then we have to give object into ()

const name = ()=>({username: "hitesh"})

// console.log(name())