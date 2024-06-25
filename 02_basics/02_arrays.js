const marvel_heros =["thor", "ironman", "captain"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// console.log(typeof all_new_heros);

const another_array =[1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]] 
const real_another_array = another_array.flat(Infinity) // merges the coplex array to the depth we want to; in above case it's 2
// console.log(real_another_array);

console.log(Array.isArray("Keshav"));
console.log(Array.from("Keshav"));  //converting any datatype to array
console.log(Array.from({name: "Keshav"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));