const Calculator = require("../libraries/Calculator");
const mycalc = new Calculator();
//const mycalc2 = new Calculator();

// jo: please format/indent your code more consistently - makes it look much more professional and readable

const addNumbers = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const sum = mycalc.add(number1, number2);
  //mycalc2.add(number1, number2);
  console.log(sum);

  res.status(200);
  res.json({ result: sum });
};

const subtractNumbers = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const difference = number1 - number2; // jo: should use the calculator library for this instead!
  console.log(difference);

  res.status(200);
  res.json({ result: difference });
};

const multiplyNumbers = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const product = number1 * number2; // jo: should use the calculator library for this instead!
  console.log(product);

  res.status(200);
  res.json({ result: product });
};

const divideNumbers = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const division = number1 / number2; // jo: should use the calculator library for this instead!
  console.log(division);

  res.status(200);
  res.json({ result: division });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
