  const prompt= require("prompt-sync")();
      var i=0;
      let arr=Math.floor(Math.random()*(100 - 2) + 2);

      function guess(){
    
      let user_input=prompt("ENTER A NUMBER :");
    

    // user_input=document.getElementById("NUMBER").value;
    // user_input=document.getElementById("NUMBER").value;
        
          if(user_input == arr){
           
            console.log(`Numer you gussed is  ${user_input} `);
            console.log(`Well Done! It took you ${i+1} attempts to guess this number   `);
            // document.getElementById("tout").innerHTML=`Well Done! It took you ${i+1} attempts to guess this number   `;
            
            
            }
          else if(user_input < arr && user_input>0){
            
            console.log(`Numer you gussed is  ${user_input} `);
            console.log(`YOU GUESSED LESSER THAN MY NUMBER`);
            // document.getElementById("tout").innerHTML="YOU GUESSED LESSER THAN MY NUMBER";
            i+=1;
            return guess();
            }
          else if(user_input >arr){
            console.log(`Numer you gussed is  ${user_input} `);
            console.log(`YOU GUESSED GREATER THAN MY NUMBER  `);
            // document.getElementById("tout").innerHTML="YOU GUESSED GREATER THAN MY NUMBER";
            i+=1;
            return guess();
        }
        else if(user_input == 0) ;

  
}

guess();  



































// const prompt= require("prompt-sync")();
// var i=0;
// let arr=Math.floor(Math.random()*(100 - 2) + 2);

// function guess(){
    
    
    

//     // user_input=document.getElementById("NUMBER").value;
//     user_input=document.getElementById("NUMBER").value;
        
//           if(user_input == arr){
           
//             console.log(`Numer you gussed is  ${user_input} `);
//             console.log(`Well Done! It took you ${i+1} attempts to guess this number   `);
            
//             }
//           else if(user_input < arr && user_input>0){
            
//             console.log(`Numer you gussed is  ${user_input} `);
//             console.log(`YOU GUESSED LESSER THAN MY NUMBER`);
//             i+=1;
//             return guess();
//             }
//           else if(user_input >arr){
//             console.log(`Numer you gussed is  ${user_input} `);
//             console.log(`YOU GUESSED GREATER THAN MY NUMBER  `);
//             i+=1;
//             return guess();
//         }
//         else if(user_input == 0) ;

  
// }

// guess(); 