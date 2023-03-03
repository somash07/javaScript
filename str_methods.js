/*
    strings are immutable.Original string never changes.Return value of function chai farak string hunxan ani original string farak hunxa
*/
let nam="somash";
let nam2="sum";
console.log(nam.length);//property
console.log(nam.toUpperCase());//function
console.log(nam.toLowerCase());//function

//string slicing
console.log(nam.slice(2,4)); //2 to 3 op ma
console.log(nam.slice(2)); //op mash 

console.log(nam.replace("som","sum")); //agadi lai paxadi le replace

console.log(nam.concat("is a friend of ",nam2,"ok")) //nam ma add gardai janxa orderly
let nam3="     somash     "
console.log(nam3.trim()); //starting ra ending ko space hataidinxa
