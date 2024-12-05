const animals = ['Tiger', 'Giraffe']
console.log(animals);

//add 2 animals ath the end
animals.push('Lion');
animals.push('Fox');

console.log(animals);

//add 2 animals ath the beginning
animals.unshift('Bear');
animals.unshift('Deer');
console.log(animals);

//sort array alphabetically

console.log(animals.sort());

//replace middle value of array with new value

function replaceMiddleAnimal(newValue){
    let index=Math.floor(animals.length/2);
   animals[index]=newValue;
   return animals;
}

console.log(replaceMiddleAnimal('Monkey'));


//find matching animals starts with a given string
function findMatchingAnimals(beginsWith){
 
for(let i=0;i<animals.length;i++){
    if(animals[i].toLowerCase().startsWith(beginsWith.toLowerCase())){
            console.log(animals[i]) ;
    }
}
}

// jo: better way is to use filter, and return the result instead of logging to console:
function findMatchingAnimals2(beginsWith) {
  return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
}

findMatchingAnimals('MON');
findMatchingAnimals('Li');

console.log(findMatchingAnimals2('t'))