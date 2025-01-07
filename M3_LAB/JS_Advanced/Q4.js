





function printFibonacci(limit){
    // jo: move variables inside the function
    let fib1=1;
    let fib2=1;
    
    console.log(fib1);
    console.log(fib2);
    let count=2; //print fib1 and fib2
    
    let interval=setInterval(()=>{
    let fib=fib1+fib2;
    console.log(fib);
    fib1=fib2;
    fib2=fib;

    count++;

    if(count>=limit){
     clearInterval(interval);  //stop after limit
 
    }
},1000);

   
}
//printFibonacci(10);



// console.log(fib1);
// console.log(fib2);

function printFibonacciTimeouts() {
  let fib1 = 1;
  let fib2 = 1;

  console.log(fib1);
  console.log(fib2);

  // jo: enable calling setTimeout recursively
  setTimeout(function printNext() {
    let fib = fib1 + fib2;
    console.log(fib);

    fib2 = fib1;
    fib1 = fib;
    setTimeout(printNext, 1000);
  }, 1000); //uses setTimeout to schedule the next call
}

printFibonacciTimeouts();  //recursive settimeout
