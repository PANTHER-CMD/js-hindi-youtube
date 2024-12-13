const userEmail = "BKL@gmail.com"

if (userEmail) {
    console.log("got user Email")
}else{
    console.log("don't get User Email");
    
}


// Falsy Values
// 0, false, -0, BigInt On, "", null, undefined, NaN

// Truthy Value
// "0", 'false', " ",[], {}, function(){}

const emptyobj = {}

if (Object.keys(emptyobj).length===0) {
    console.log("object is empty");
}
    
    // new operator which is uesed to check what is value null or real value

 let val1;
 val1 = 10 ?? null;
val1 = null ?? 20 ?? 80;
 console.log(val1);
 
