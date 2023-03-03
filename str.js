/*
`= backtick
double quote string
single quote string
*/

let nam= "somash"
console.log(nam)
console.log(nam.length)


let nam2='sume'
console.log(nam2);
console.log(nam2.length);

//template literals uses backticks

//we can insert variables in template literal.This is called string interpolation.
let kta1='Ram'
let kta2="shyam"

let sentence=`${kta1} is friend of ${kta2}`
console.log(sentence)

//escape sequence characters
// /n newline,/t tab,/r carriage return
let fruit='bana\ra'
console.log(fruit)