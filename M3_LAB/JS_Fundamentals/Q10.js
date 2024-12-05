
//create Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive =()=>this.age>18;     //add canDrive Method
        
    
    }

let person1=new Person('peter',14); //create person1
console.log(person1);
console.log(person1.canDrive());

let person2=new Person('Jenny',29);  //create person2
console.log(person2);
console.log(person2.canDrive());

//create class "PersonClass"

class PersonClass{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.human=true;
    }

    //add canDrive Method

    canDrive(){
        return this.age >20;
    }
}

let person3=new PersonClass('Charles',35); //create person3
console.log(person3);
console.log(person3.canDrive());

