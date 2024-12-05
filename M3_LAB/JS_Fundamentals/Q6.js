const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName:'William',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    // getCatchPhrase(person) {

    //     if(person.numFingers===6){
    //         return 'you are great';
    //     }

    //     else{
    //         return 'Nice to meet you.';
    //     }
    
    // }

    getCatchPhrase:(person) =>
        person.numFingers === 6  ? "You are great." : "Nice to meet you."
        
        


     
     };


    inigo.greeting(westley)
    inigo.greeting(rugen)