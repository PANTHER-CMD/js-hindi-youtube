
let array =[1, 2, 23, 45, 65, 66]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element)
}

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        const result = i*j;
        // console.log(`${i} * ${j}`, "=", result );
        
        
    }
}

let index = 0;
while (index<=20) {
  
//    console.log(`value of index is ${index}`)
   index = index +2;

}

let score = 1;
do {
    // console.log(`value of score is ${score}`)
    score++;
} while (score<=10);

// for of loop

let Myarr = [1, 2, 3, 4]
for (const val of Myarr) {
    // console.log(Myarr[val])
}

const greeting = "hello world"
for (const greet of greeting) {
    if (greet === " ") {
        continue;
    } else {
        //  console.log(`char of greeting is ${greet}`)}
}



// Maps

}
const map = new Map()
map.set(`IN`, "India")
map.set(`Fr`, "France")
map.set(`UK`, "United Kingdowm")
console.log(map);

for (const [key , value] of map) {
  console.log(key ,`:-`, value);
}
