function makeCounter(startFrom,incrementBy,) {
    let currentCount = startFrom;
    return function() {
    currentCount+=incrementBy;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter(2,2);
    counter1(); // 1
    counter1(); // 2

    //create counter2 

    let counter2 = makeCounter(3,4);
    counter2();