


//length of array without using lenghth()
// let arr=[1,2,4,6,5];
// let len=arr.push();
// console.log('ARRAY :',arr);
// console.log('LENGTH OF ARRAY : ',len);

//elemnt at given index 
// let arr=[1,2,4,6,5];
// let indx=(arr,index)=>{
//     console.log('ARRAY : ',arr);
//     return console.log("ELEMENT AT GIVEN INDEX :", index ,": IS :",  arr[index]);
// };
// indx(arr,2);

//add elemnt at the end

// let arr=[1,2,4,6,5];
// let pu_sh=(arr,elem)=>{
//     console.log('ARRAY : ',arr);
//     arr.push(elem);
//     console.log('ARRAY AFTER PUSHING : ',arr);
// }
// pu_sh(arr,10);

//pop an element

// let arr=[1,2,4,6,5];
// let po_p=(arr)=>{
//     console.log('ARRAY : ',arr);
//     arr.pop();
//     console.log('ARRAY AFTER POP : ',arr);
// }
// po_p(arr);

//shift

// let arr=[1,2,4,6,5];
// let shi_ft=(arr)=>{
//     console.log('ARRAY : ',arr);
//     arr.shift();
//     console.log('ARRAY AFTER SHIFT : ',arr);
// }
// shi_ft(arr);

//unshift


// let arr=[1,2,4,6,5];
// let unshi_ft=(arr)=>{
//     console.log('ARRAY : ',arr);
//     arr.unshift(66);
//     console.log('ARRAY AFTER UNSHIFT : ',arr);
// }
// unshi_ft(arr);

//concatination

// let arr=[1,2,4,6,5];
// let arr2=[10,11,12,13,14,15];
// console.log('ARRAY : ',arr);
// console.log('ARRAY : ',arr2);
// arr=arr.concat(arr2);
// console.log('AFTER CONCATINATION : ',arr);


//flat

// let arr=[1,2,4,6,5,[10,11,15]];
// console.log('ARRAY:',arr);
// arr=arr.flat();
// console.log('FLAT',arr);

//join 

// let arr=['apple','banana','orange'];

// let j_oin=(arr,separator)=>{
//     console.log('ARRAY :',arr);
//     let a=arr.join()
//     console.log(a);
//     console.log('TYPE :',typeof a);
// };
// j_oin(arr,',');


//delete

// let arr=['a','b','c','d','e'];
// let dlt=(arr,index)=>{
//     console.log('ARRAY :',arr);
//     delete arr[index];
//     console.log('DELETING ELEMENT at:',index,':',arr);

// }
// dlt(arr,2);


// let arr=['a','b','c','d','e'];


// let to_str=(arr)=>{
//     console.log('ARRAY :',arr,'TYPE :',typeof arr)
//     let a=arr.toString()
//     console.log(a,': TYPE :',typeof a);
// }
// to_str(arr);

// let arr=['a','b','c','d','e'];
// let str='heloowowoow'

// let is_array=(arr)=>{
//     console.log('INPUT:',arr);
//     let a=Array.isArray(arr);
//     if(a==true) console.log('YES IT IS AN ARRAY');
//     else console.log('IT IS NOT AN ARRAY');
// }
// is_array(arr);
// is_array(str);