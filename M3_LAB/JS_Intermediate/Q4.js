
//for loop without conditional operator
function camelCase(cssProp){
    let word=cssProp.split('-');
   
    for(let i=1;i<word.length;i++){
       word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1);
    }
     return word.join('');

     
}
 //for each with conditional operator

function camelCase1(cssProp){
  
    
    let word = cssProp.split('-');
    let camelcase = '';

    word.forEach((words, i) => {
        camelcase += i === 0 ? words : words.charAt(0).toUpperCase() + words.slice(1); 
    });
    return camelcase;
     
}

console.log(camelCase('margin-left'));
console.log(camelCase1('background-color'));