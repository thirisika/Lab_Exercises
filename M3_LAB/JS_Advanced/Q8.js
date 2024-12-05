function validateStringArg(fn) {
    return function (...args) {
        // Validate arguments using a for loop
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'string') {
                throw new Error ("All arguments must be strings.");
            }
            
        }
        // If valid, call the original function
        return fn(...args);
    };
}

//use ... rest operator to  allowing multiple item name arguments

function orderItems(...itemName) {
    return `Order placed for: ${itemName.join(',')}`;
    }

    //to validate as strings all arguments passed to fn
const validatedOrderItem = validateStringArg(orderItems);

//console.log(validatedOrderItem("Apple Watch")); // should run the function
//console.log(validatedOrderItem(123)); // should throw an error


//use try-catch blocks to handle errors
try{
    console.log(validatedOrderItem("Apple Watch"));
}catch(error){
    console.error(`${error.name}:${error.message}`);
}

try{
    console.log(validatedOrderItem(123));
}catch(error){
    console.error(`${error.name}:${error.message}`);
   
}


