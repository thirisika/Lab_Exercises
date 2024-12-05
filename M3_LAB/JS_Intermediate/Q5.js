let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2); //"0.20"- string
let fixedTen = tenCents.toFixed(2);    //"0.10"- string
console.log(fixedTwenty + fixedTen)   //"0.200.10"-  string //why is this not working? Answer:toFixed() convert number into string and the '+' operator concatenate  instead of adding them.

function currencyAddition(float1, float2){
    //let fourtyCents=parseFloat(float1.toFixed(2));
    //let nintyCents=parseFloat(float2.toFixed(2));

    // jo: this returns a string, not a number
    //return (fourtyCents+nintyCents).toFixed(2);

    // jo: this instead returns a number with the right number of decimal places
    return parseFloat((float1+float2).toFixed(2));
}

function currencyOperation(float1, float2, operation){

    // let f1=parseFloat(float1.toFixed(2));
    // let f2=parseFloat(float2.toFixed(2));

    let f1=float1*100;
    let f2=float2*100;

   let result;
switch (operation) {
  case '+':
  //  result=(f1+f2).toFixed(2);
      result=f1+f2;
    break;
  case '-':
    // result=(f1-f2).toFixed(2);
    result=f1-f2;
    break;
  case '*':
    // result=(f1*f2).toFixed(2);
    result= Math.round((f1 * f2) / 100); // jo: normalise after multiplication
    break;
    case '/':
    // result=(f1/f2).toFixed(2);;
    result= Math.round((f1 / f2) * 100); // jo: normalise division properly
    break;
  default:
    result="no operatore";
}
return result/100;

   
}


function currencyOperationExtended(float1, float2, operation, numDecimals) {
    let factor=Math.pow(10, numDecimals);
  
    let f1=Math.round(float1*factor);
   let f2= Math.round(float2*factor);
  let result;
    if(operation==='+'){
      result= (f1+f2);
  }

  else if(operation==='-'){
      result= (f1-f2);
  }
  
  else if(operation==='*'){
      result= Math.round((f1 * f2) / factor); // jo: normalise after multiplication
  }
  
  else if(operation==='/'){
      result= Math.round((f1 / f2) * factor); // jo: normalise division properly
  }
  else{
     result="not a valid operator";
  }
  return result/factor;
  }



console.log(currencyAddition(0.1,0.2));
console.log(currencyAddition(92.95,88.44));

console.log(currencyOperation(0.17,0.27,'+'));
console.log(currencyOperation(43.13,87.32,'-'));
console.log(currencyOperation(0.85,0.5,'*'));
console.log(currencyOperation(5.33,8.11,'/'));

 console.log(currencyOperationExtended(0.7, 0.378, '*', 4));
 console.log(currencyOperationExtended(0.7, 312.8787, '/', 4));

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true