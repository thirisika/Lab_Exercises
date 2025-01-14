function Calculator(event){
    event.preventDefault();
    const operation=document.getElementById('operation').value;
    console.log(operation);
    const num1=document.getElementById('num1').value;
 const num2=document.getElementById('num2').value;
fetch(`/calculator/${operation}?num1=${num1}&num2=${num2}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML =
            data.result;
    })
   
}

document.getElementById('CalculatorForm').addEventListener('submit',Calculator);