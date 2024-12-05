let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        
            console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
        
        
        }
    }
        //car.description(); //works

        //fix setTimeout call
        setTimeout(()=>car.description(), 200); 

        
        let clonnedArray={...car,year:2024};
        clonnedArray.description();

        setTimeout(()=>car.description(), 300); 

        //c) here I have created separated object clonnedArray. changing properties in clonnedArray doesn't affect the original values of car object

        //fix setTimeout call with bind
        setTimeout(car.description.bind(car),400);

        let clonnedMake={...car,make:'300'};
        clonnedMake.description();

        setTimeout(car.description.bind(car),500);

//e) the both setTimeout display the original car object values. because bound function is tied to it.changes in clonnedMake doesn't affect the bound method.

