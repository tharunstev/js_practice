//1:palindrome or not 

// let arr="naan";
// let arr2="";
// let arr3="BASICALLY"
// let arr4="";
// for(i=arr.length-1;i>=0;i--){
//     arr2+=arr[i];
    
// }

// for(i=arr3.length-1;i>=0;i--){
//     arr4+=arr3[i];
    
// }

// if(arr==arr2) console.log(`${arr} : is a palindrome`);
// if(arr3!=arr4) console.log(`${arr3} : is not a palindrome`);


//2:capitalize starting word

// let mrng="hola muchacho";
// let cap=mrng.split(" ");
// for(i=0;i<cap.length;i++){
//     cap[i]=cap[i][0].toUpperCase() + cap[i].substring(1);
// }
// cap.join();
// console.log(mrng);
// console.log(cap[0],cap[1]);

//3:count occurence of specific words
// let words="anyoseyo";
// let count=0;
// let letter="o"
// for(i=0;i<=words.length-1;i++){
//     if(words[i]==letter) count+=1;
// }
// console.log(`INPUT STRING : ${words} `);
// console.log(`OCCURENCE OF '${letter}' : ${count} `);

//string to uppercase
// let words="hola senora anyoseyo";
// console.log(`string to uppercase`);
// console.log(`INPUT STRING : ${words}`);
// console.log(words.toUpperCase());

//count of characters
// let words="holasenoraanyoseyo";
// let count=0;
// for(key of words) count+=1;
// console.log(`INPUT STRING : ${words}`);
// console.log(`CHARACTER COUNT :${count}`);

// if strin contains a substring
// let words="holasenora anyoseyo";
// let mathh=words.match("anyo");
// let sub="anyo"
// console.log(words);
// if(mathh==sub) console.log(`YES GIVEN INPUT CONTAINS A SUB STRING :${sub}`)


// replace substring with other

// let rep=words.replace("anyo","bora");

// console.log(`INPUT STRING : ${words}`);
// console.log(`REPLACED STRING : ${rep}`);

//concatinate strings
// let str1="anyo";
// let str2="seyo";
// str1=str1.concat(str2);
// console.log(str1);

// reverse a substring
// let rev=""
// let str1="anyoseyo";
// for(i=str1.length-1;i>0;i--) rev+=str1[i];

// console.log(`INSPUT STRING IS : ${str1}`);
// console.log(`REVERSE OF A STRING : ${rev}`);
    
//to lower case

// let str1="ANYOSEYO";
// console.log(`INPUT STRING : ${str1}`);
// console.log(`tollowerCASuE :${str1.toLowerCase()}`);

//string empty or not 

// let str1="ANYOSEYO";
// let empytttt="";
// if(str1.length==0)console.log(`STRING IS EMPTY`);
// else console.log(`${str1} : STRING IS NOT EMPTY`);

//checck if string contains digits

// let str1="ANYOSEYO";
// let str_digi="ANYO669";
// var digitts=0;
// let digi=(a)=>{
// //    
//     for(key of a){
//         if(key=='0'||key=='1'||key=='2'||key=='3'||key=='4'||key=='5'||key=='6'||key=='7'||key=='8'||key=='9') {digitts=1; break;}
        
//     }
//     if(digitts==1) console.log(`${a}: CONTAINS DIGITS`);
//     else console.log(`${a} : DONT HAVE DIGITS`);
// }
// digi(str1);  
// digi(str_digi); 


//split string into array of substrings
// let str="annyo*seyo*bora";
// let sub=str.split('*');

// console.log(`INPUT STRING : ${str}`);
// console.log(`ARRAY OF SUBSTRINGS : ${sub}`);

// starts with substring
// let str1="ANYOSEYO";
// let res=str1.startsWith("ANYO");
// console.log(`ÌNPUT STRING : ${str1}`)
// console.log(`SUBSTRING : ANYO : ${res}`);

//

let str1="ANYOSEYO";
let res=str1.endsWith("ANYO");
console.log(`ÌNPUT STRING : ${str1}`)
console.log(`SUBSTRING  : ANYO : ${res}`);
