
function debounce(func) {
    let timer; //initialise timer
    return function (...args) {
        clearTimeout(timer); // Clear any existing timer
        timer = setTimeout(() => func.apply(this, args), 1000); // Set a new timer for 1s
    };
}

function debounce(func,ms=1000) {
    let timer; //initialise timer
    return function (...args) {
        clearTimeout(timer); // Clear any existing timer
        timer = setTimeout(() => func.apply(this, args), ms); //Set a new timer with custom delay
    };
}


function printMe() {
    console.log('execute Debounce')
    }

    function print(msg) {  //Test function with argument
        console.log(`execute Debounce with this message ${msg}`);
        }

    const debouncePrint = debounce(printMe); 
    const debouncePrintcustom = debounce(printMe,3000); 
    const debouncePrintMsg=debounce(print,1500);

    
    debouncePrint();  //execute after 1s

    debouncePrintcustom();
    debouncePrintcustom();  //execute after 3s

    // jo: added more tests, all working well
    debouncePrintMsg('hello 1');
    debouncePrintMsg('hello 2');
    debouncePrintMsg('hello 3');
    debouncePrintMsg('hello 4');//execute after 1.5s
    