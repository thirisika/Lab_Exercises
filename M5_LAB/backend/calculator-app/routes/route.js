// const express = require('express');
// const router = express.Router();

// router.get('/calculator', (req, res) => {
//     res.send('Hello  Calculator app!')
// })

// module.exports = router

const express = require('express');
const router = express.Router();
const calculatorController=require('../controllers/calculatorController')

// new route for adding two numbers
router.get('/add', (req, res) => {
   calculatorController.addNumbers(req,res);

})

router.get('/subtract', (req, res) => {
    
    calculatorController.subtractNumbers(req,res);
 })

 router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req,res);
 })
// module.exports = router;

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req,res);
 
 })
module.exports = router;