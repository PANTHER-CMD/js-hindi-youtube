const myObject ={
    js:"javascript",
    cpp:"C++",
    Rb : "Ruby"
}

for (const key in myObject) {
   console.log(`${key} is shortcut for language ${myObject[key]}`)
}