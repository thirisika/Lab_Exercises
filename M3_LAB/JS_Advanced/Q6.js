
Function.prototype.delay = function(ms){
        const originalFunction = this; // Save the original function context
        return function(...args) {
            setTimeout(() => {
                //originalFunction(...args); // Call the original function after delay
                originalFunction.apply(this,args);  //apply handle any number of arguments
            }, ms);
        };
    };

    function multiply(a, b) {
        console.log( a * b );
        }
        multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

        function multiplication(...number) { //example after using apply
            console.log( number.reduce((multiply,num)=>multiply*num,1) );
            }
            multiplication.delay(1000)(1,2,3,4,5,6); // prints 720 after 1 seconds

        function multiply4(a, b,c,d) {
            console.log( a * b *c * d);
            }
            multiply4.delay(2000)(5, 5,4,4); // prints 400 after 2 seconds