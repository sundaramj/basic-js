 /* Print Star in console */

 let result = '';
 for(let i=0;i<5;i++){
     // add space before star
     for(let j=5;j>i;j--){
         result += " ";
     }
     // print left side star
     for(let k=0;k<i;k++){
         result += "*";
     }
     // print right side star
     for(let l=0;l<i+1;l++){
         result += "*";
     }
     // after every loop break the line by using \n
     result += "\n"; 
 }
 console.log(result); //at the end print appended value