function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');

//order of messages when running code:
// Not delayed at all(first, synchronous therefore no delay)
// Delayed by 0ms (second, even though comes before #3, still no delay)
// Delayed by 20ms (prints after 20ms)
// Delayed by 100ms (prints after 100ms)

//rewrite delayMsg into arrow function

 delayMsg=(msg)=>{
    
console.log(`This message will be printed after a delay: ${msg}`)
}

//fifth test uses large delay time
let delay5=setTimeout(delayMsg, 11000, '#5: Delayed by 11s');

//Use clearTimeout to prevent the fifth test from printing at all.


clearTimeout(delay5);