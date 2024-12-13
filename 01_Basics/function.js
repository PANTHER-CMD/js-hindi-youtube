function add(number1, number2){
    console.log(number1 + number2)
    }
    // add(3, 4)
    
    function generate(){
        console.log(Math.random())
    }
    //  generate()
    
    
    function loginuser(username){
        if(!username){
     console.log("please enter user name")
        }
        return `${username} just logged in`
    }
    
    // console.log(loginuser())
    
    function calculateCartPrice(...num1){
        return num1
    }
    // it gives array for cart prices
    
    
    // console.log(calculateCartPrice(100, 2000, 925, 5644));
    
    // in this functio strating two value goes into val1 and val2 and rest in array
    
    function calculateCartPrice(val1,val2,...num1){
        return num1
    }
    
    
    // console.log(calculateCartPrice(100, 2000, 925, 5644));
    const user ={
        username: "sam",
        price: 399
    }
    
    function handelObject(anyobject){
        console.log(`User name is ${anyobject.username} and price is ${anyobject.price} and user's location is ${anyobject.location}`) 
    }
    
    handelObject(user);
    
    handelObject({
        username:"hero",
        price:456,
        location:"jaipur" 
    }) 
    