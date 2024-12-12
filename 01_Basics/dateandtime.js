//  **agar new nahi likha tho date method ka type string hoga or agr new likha tho object hoga
let myDate = new Date();
console.log(myDate);
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myDate.getTime());
console.log(typeof myTimestamp)
console.log(myDate.getHours())
console.log(myDate.toLocaleString('default' , {
     weekday: "long",

}));