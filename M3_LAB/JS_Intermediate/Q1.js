function capitalize(str){
    let word=str.split(' ');  //split the string
    let capitalizeWords=[];

    for(let i=0;i<word.length;i++){
        capitalizeWords.push(word[i].charAt(0).toUpperCase()+word[i].slice(1));  //Capitalizes the first character and Retains the rest of the word then The transformed word is pushed to the capitalizedWords array
       
    }
    return capitalizeWords.join(' '); //Combines the transformed words back into a single string with spaces.
}

let sentence="los angeles";
console.log(capitalize(sentence)); //Los Angeles

let sentence1='I could be anything you like';  //I Could Be Anything You Like
console.log(capitalize(sentence1));

