// if lower case convert to upper

let str="HoLa SEnOra";
// let b='A';
// b.charCodeAt();
// // console.log(b.charCodeAt());
// console.log(b.toLowerCase());
// console.log(str[0].toLowerCase())



console.log(`INPUT STRING IS : ${str}`);
for(i=0;i<=str.length;i++){
    
    // console.log(str[i].charCodeAt())
    if(str[i].charCodeAt() >=60 && str[i].charCodeAt() <=90) {
        console.log(str[i].toLowerCase());
        // console.log(str[i]);
    }
    else {console.log(str[i].toUpperCase())}
}









// count of vowels and consonants


let arr=['a','b','c','e','u','d','o','g','h'];
let vowelss=0;
let consonants=0;
for(key of arr){
    // console.log(key);
    if(key =='a'|| key=='e'||key=='i'|| key=='o'||key=='u') vowelss+=1
    else consonants+=1;
}
console.log(`vowels :${vowelss}`);
console.log(`consonents :${consonants}`);