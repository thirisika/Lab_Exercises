// Function to roll the dice

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}




//function for get result after rolling the dice
function getResult() {
    const diceSelect=document.getElementById('diceSelect').value;
    const selectedDice = parseInt(diceSelect);   
  
   
   

    // Clear any previous messages
    document.getElementById('error').innerHTML = "";
    document.getElementById('result').innerHTML= "";
    document.getElementById('test').innerText="";

    // Check whether selection is valid
    if (isNaN(selectedDice)) {
       document.getElementById('error').innerHTML= "Please select a valid dice type to roll.";
    } else {
        const result = rollDice(selectedDice);
         document.getElementById('result').innerHTML = "You rolled a " + result;

         const testmessage=getTestmessage(selectedDice,result)
         document.getElementById('test').innerText=testmessage;
    }

  


}


// perform unit test
function getTestmessage(selectedDice,result){
    

    if (selectedDice === 6 && result <= 6) {
        return 'The values displayed in D6 dice are less than or equal to 6';
    } else if (selectedDice === 10 && result <= 10) {
        return 'The values displayed in D10 dice are less than or equal to 10';
    } else {
        return 'Invalid result for the selected dice.';
    }
}

// Event listener for the roll button
document.getElementById('rollButton').addEventListener('click', getResult);

// Function to  clear result and error message
function resetResult() {
    document.getElementById('result').innerHTML = ""; 
    document.getElementById('error').innerHTML = ""; 
    document.getElementById('test').innerText="";
}

// Event listener for the reset button
document.getElementById('resetButton').addEventListener('click', resetResult);


