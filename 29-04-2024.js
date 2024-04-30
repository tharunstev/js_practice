const prompt= require("prompt-sync")();
// let num=+prompt("ENTER A POSITIVE NUMBER :");
// let sum=0;
// for (i=1;i<=num;i++) {
//     if(i%2==0) continue;
//     else {
//         console.log(i);
//         sum+=i;
//     }
// }
// console.log(`SUM OF ODD NUMBERS :${sum}`);

// //sum of even numbers

// let e_ven=prompt("ENTER A PPOSITIVE NUMBER :");
// let evens_sum=0;
// for(i=0;i<=e_ven;i++){
//     if (i%2==0) {
//         console.log(i);
//         evens_sum+=i;
//     }
// }
// console.log('SUM OF EVEN NUMBERS :',evens_sum);

// console.log('DIFFERENCE BETWEEN EVEN SUM AND ODD SUM : ',sum-evens_sum)
// if(sum>evens_sum) console.log('ODD SUM IS GREATER THAN EVEN');
// else console.log('EVEN SUM IS GREATER THAN ODD SUM');

// const prompt= require("prompt-sync")();

// let num=prompt("ENTER SERIES OF NUMBERS :");
// let user_inp=prompt("Enter A positive number :");
// let ccount=0;
// if(user_inp <=0) {
//     console.log("ENTER A NUMBER POSITIVE NUMBER");
// }
// else {
//     for(i=0;i<=num.length-1;i++){
//         if(num[i]==user_inp) ccount+=1;
//     }
//     if(ccount>3) console.log('LOTTERY IS DENIED ');
//     else console.log("LOTTERY IS ACCEPTED");
// }
// // console.log(num)

// let num1="7423";
// let rev="";
// let a=1000;
// for(i=num1.length-1;i>=0;i--){
//     rev+=num1[i];
// }
// for(i=0;i<=rev.length-1;i++){
//     if(i==0)
//     {
//         console.log(rev[i]*a);
//     console.log("+");

//     }
//     else if(i==1){
//         console.log(rev[i]*a/10);
//     console.log("+");
//     }
//     else if(i==2){
//         console.log(rev[i]*a/100);
//     console.log("+");
//     }

//     else console.log(rev[i]);


// } 


let obj1=[
    {name:'A',age:21,city:"mumbai"},
    {name:'B',age:22,city:'hyderabad'},
    {name :'c',age:23,city:'mumbai'},
    {name :'c',age:23,city:'Andhra Pradesh'},
];
let hyd=0;
let m=0;
let ap=0;

for(i=0;i<=obj1.length-1;i++){
    if(obj1[i].city=="mumbai") m+=1;
    else if(obj1[i].city=='hyderabad') hyd+=1;
    else if(obj1[i].city=='Andhra Pradesh') ap+=1;

}
console.log('hyd :',hyd,'persons');
console.log('mumbai :',m,'persons');
console.log('Andhra pradesh :',ap,'persons');