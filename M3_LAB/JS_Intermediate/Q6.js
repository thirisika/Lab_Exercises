const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];


function unique(dublicateArray){
    

    let changeToset=new Set(dublicateArray);
    let uniqueElement=[...changeToset];
    return uniqueElement;

}

 console.log(unique(colours));
console.log(unique(testScores));