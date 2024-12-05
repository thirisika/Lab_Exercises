
//for loop without conditional operator
function camelCase(cssProp){
    let words=cssProp.split('-');
   
    for(let i=1;i<words.length;i++){
       words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
     return words.join('');

     
}
 //for each with conditional operator

function camelCase1(cssProp){
  
    
    let words = cssProp.split('-');
    let camelcase = '';

    words.forEach((word, i) => {
        camelcase += i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1); 
    });
    return camelcase;
     
}

console.log(camelCase('margin-left'));
console.log(camelCase1('background-color'));