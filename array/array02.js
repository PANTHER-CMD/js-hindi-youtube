// concat method
let marvel_hero = ["ironman", "hulk", "thor"]
let dc_hero = ["superman", "batman", "flash"]
// // this methpd give me array into array which is not good 
// (marvel_hero.push(dc_hero);
// console.log(marvel_hero);)

// to solve above problem we use concat method

let all_heroes=marvel_hero.concat(dc_hero);
console.log(all_heroes);
// but here we have some limitation like we only give one arrgument in concat method
// so we use spread operator whose syntax is [...dc_hero,]
 let myheroes = [...marvel_hero, ...dc_hero]
 console.log(myheroes);

 const anotherarray = [0, 2, 4, [5,3,2],9, 8, [5, 6,4]]
 console.log(anotherarray.flat(Infinity))

 console.log(Array.isArray("Hitesh"))
 console.log(Array.from("Hitesh"))
 console.log(Array.from({name:"Hitesh"}))//**it give empty array because we do not give any key */
  
 let score1 = 100
 let score2 = 200
 let score3 = 300
 
 console.log(Array.of(score1, score2, score3))
 