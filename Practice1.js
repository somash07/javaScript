let marks={
    somash: 20,
    sumina: 30,
    shirshak: 40,
    ram: 50
}
//object.keys(marks) returns array ie somash,sumina,shirshak,ram
//marks vitra kunai key halda tesko value dinxa key valu pair ma
for(let i=0;i<Object.keys(marks).length;i++){
     console.log("the marks of "+Object.keys(marks)[i]+"is"+marks[Object.keys(marks)[i]]);
}

//same problem using for in loop
for(let b in marks){
    console.log("key"+b+": "+marks[b]);
}

//qns 2
const mean=(a,b,c,d,e)=>{
    return ((a+b+c+d+e)/5);
}
console.log("mean is "+mean(1,2,3,4,5));