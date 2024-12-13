const arr = [1, 2, 3, 4]
arr.forEach((item, index ,arr)=>{
    // console.log(item, index, arr);
})

function printme(val){
    // console.log(val);
}

arr.forEach(printme)

let myArray = [{
  languageName:"java",
  languageFileName:"java"
},
{
    languageName:"javascript",
    languageFileName:"js"
  },
  {
    languageName:"phython",
    languageFileName:"Py"
  }
]

myArray.forEach((item)=>{
console.log(item.languageName,`filename is`,item.languageFileName);
})