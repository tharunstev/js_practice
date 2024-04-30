const prompt= require("prompt-sync")();
let num=prompt("ENTER A NUMBER :");
for(i=1;i<=num;i++)console.log(i);
for(i=num;i>=0;i--)console.log(i);
for(i=-num;i<=-1;i++)console.log(i);
for(i=-1;i>=-num;i--)console.log(i)


//sum of largest prime and smallest prime and largest non-prime

// let ho=prompt("ENTER NUMBERS :");
// let lar_gest=Number(ho[0]);
// let sma_llest=Number(ho);
// let non_prime=Number(ho[0]);
// for(a of ho){
//     if(a>1){
//         var c=true;
//         for(i=2;i<a;i++){
//             if(a%i==0){
//                 c=false;
//                 if(a>non_prime)non_prime=a;
//             }

//         }
//         if(c){
//             if(a>lar_gest)lar_gest=a;
          
//         }
//         if(c){
//             if(a<sma_llest)sma_llest=a;
//         }

//     }
// }
// console.log('LARGEST PRIME IS : ',lar_gest);
// console.log('SMALLEST PRIME IS :',sma_llest);
// console.log('SUM OF LARGEST AND SMALLEST  :',(+lar_gest+ +sma_llest));
// console.log('LARGEST NON-PRIME :',non_prime);















//largest prime number
// let p=prompt("ENTER NUMBERS :");
// let maxy=Number(p[0]);
// let smalll=0;
// for(a of p){
//     if(a>1){
//         var c=true;
//         for(i=2;i<a;i++){
//             if(a%i==0)c=false;
//         }
//         if(c){
//             if(a>maxy)maxy=a;
            
//         }
//     }
// }
// console.log('LARGEST PRIME NUMBER IS :',maxy);






