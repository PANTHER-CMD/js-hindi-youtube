let gamename = "vedansh"
const name = "iron-man-marvel"
console.log(gamename.length)
const newstring = gamename.substring(0,5)
const another = gamename.slice(-5,5)
console.log(newstring)
console.log(another)
const url = "https://vedansh/%10chandak"
// this function is use to replace in string
console.log(url.replace(`%10`,`__`))
// this split function is use to convert string into array
console.log(name.split('-'));
// thsi function is use to check the element in string
console.log(gamename.includes('vedansh'));