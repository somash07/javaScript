/*
1.Forloop
2. For off loop
3.For in loop
*/
//to add first n natural numbers 
let n=prompt("enter value of n");
let sum=0;
n=Number.parseInt(n);
for(let i=1;i<=n;i++){
    sum=sum+i;
}
console.log(sum);
//key value pair 
let obj={
    harry: 90,
    somash: 20,
    sumina: 30,
    shirshak: 40
}
//for in loop
for (let a in obj){
    console.log("marks of"+a+"is"+obj[a]);
}
//for of loop- iterable object
for(let b of "somash"){
    console.log(b);
}

