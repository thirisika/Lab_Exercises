const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// const phoneBookDEF=new Map();
// phoneBookDEF.set('Diana','0445698456')
// phoneBookDEF.set('Elosa','0445097456')
// phoneBookDEF.set('Fazil','0445699564')

const phoneBookDEF=new Map([
    ['Diana','0445698456'],
    ['Elosa','0445097456'],
    ['Fazil','0445699564']
]);

console.log(phoneBookDEF);

//update number of carolline
phoneBookABC.set('Caroline', '0455221908');
console.log(phoneBookABC);

function printPhoneBook(contacts){
    for(let [name,number] of contacts){
        console.log(`${name} : ${number}`);
    }
}
printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

//combine two maps into single map
const phoneBook=new Map([...phoneBookABC,...phoneBookDEF]);
console.log(phoneBook);

//print the full list of name in the combined Map

for(let name of phoneBook.keys()){
    console.log(`${name}`);
}
