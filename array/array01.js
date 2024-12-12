let arr = [ 0,1,2,3,4,5];
console.log(arr.length);

//*+++++++++++methods++++++++++++++++*/
arr.push(6);
arr.pop();
// add element in 0th index
arr.unshift(80);
// reverse of unshift method
arr.shift();
console.log(arr)
// to convert arr into string
let myarr = arr.join();
console.log(myarr);
console.log(typeof myarr);

// slice and splice
let nyn1 = arr.slice(1 , 3)
console.log("A", arr)
console.log(nyn1)

let nyn2 = arr.splice(1, 3)
console.log("B" , arr)
console.log(nyn2)
// splice apne array meh se hi bo part remove kar deta hai jese array B become [0, 4, 5] and nyn2 is [1, 2, 3]
// jbh ki slice os part ko remove nahi karta bas ose print kar ta hai or ismeh last index nahi liya jata

