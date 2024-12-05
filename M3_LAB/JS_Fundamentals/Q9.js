let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports=[...teamSports];
moreSports.push('Basket ball');
moreSports.unshift('netball');
// console.log(moreSports);

let dog2 = dog1;     // Copying the value of dog1
dog2 = 'Rexy';      // Changing the value of dog2

// let cat2 = cat1;   
//  cat2.name='pushy';  

//print original values
console.log(teamSports); //The original teamSports array remains unchanged because we used the spread operator ([...]) to create a copy in moreSports. Changes to moreSports do not affect teamSports.
console.log(dog1);  //original dog1 variable also remains unchanged because strings are primitive values in JavaScript. Assigning dog1 to dog2 creates a copy of the string, so modifying dog2 does not affect dog1.
console.log(cat1);  //original cat1 object does change. This is because cat1 and cat2 both reference the same object in memory. Updating the name property on cat2 affects cat1 as well since they both point to the same object.


 cat2 = { ...cat1 };
cat2.name = 'pushy';

console.log('\n----cat2 and moreSports independent-----\n');

console.log(moreSports);
console.log(cat1); //Original cat1 should be notchanged
console.log(teamSports); 
