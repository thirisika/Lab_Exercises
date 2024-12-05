function randomDelay() {
    // your code
    return new Promise((resolve,reject)=>{
// generate random delays between 1-20 seconds
    const delay=Math.round((Math.random() * 20))+1;
    //console.log(delay);

    //set timeout for random delays
    setTimeout(()=>{
        if(delay%2===0){
            resolve(delay);  //delay is successful
        }

        else{
            reject(delay); //delay is failure
        }
    },1000*delay);  //convert delay into milliseconds
        
    });
    }

    //Test the function
    randomDelay()
    .then((msg) => console.log(`There appears to have been a ${msg} seconds success delay.`))
    .catch((msg) =>console.log(`There appears to have been a ${msg} seconds failure delay .`));