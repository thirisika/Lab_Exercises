function truncate(str, max){
     let words=[];
    
     if(str.length>max){
        
         for(i=0;i<max;i++){
             words.push(str.charAt(i));
         }
         return words.join('')+"...";
 
         
     }
     
         return str;
     
 }



function truncate1(str, max){
   
   
    if(str.length>max){
       
       return str.slice(0,max)+"...";
    }
    
        return str;
    
}

function truncate2(str, max){

    return (str.length>max) ? str.slice(0,max)+"...":str;
    
     }
     
        
     

let sentence="The Quick Brown Fox Jumps Over The Lazy Dog.";
console.log(truncate(sentence,14));
console.log(truncate1(sentence,14));
console.log(truncate2(sentence,14));


console.log(truncate(sentence,140));
console.log(truncate1(sentence,140));
console.log(truncate2(sentence,140));