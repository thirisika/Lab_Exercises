import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse numbers for calculation
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);

    let calculate=0;

    switch(operator){
        case '+':
            calculate=number1+number2;
            break;

        case '-':
            calculate=number1-number2;
            break;

        case '*':
            calculate=number1*number2;
            break;

        case '/':
            calculate=number2!==0 ? number1/number2 : "not valid";
            break;
        default:
            calculate="Invalid Operator";
    }

    setResult(calculate);
   
  };

  const handleClear=()=>{
    setNum1("");
    setNum2("");
    setOperator("+")
    setResult("")

  }
  
  return (
    <div className="Calculator componentBox">
        <h3>Basic Calculator</h3>
      <form onSubmit={handleSubmit}>

        <div>
        <label>
          Num1:
          <input
            name="num1"
             type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
        </div>

        <div>
        <label>
         Num2:
          <input
            name="num2"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>

        </div>


        <div>
        <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
        >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>

        </div>

        <div> <button type="submit">Calculate</button></div>

       

      

        <div>
        <label>
          Result:
          <input
            name="result"
            type="text"
            value={result}
           
          />
        </label>
        </div>
            <div> <button type="button" onClick={handleClear}>Clear</button></div>
      </form>
    </div>
  );
}

export default Calculator
