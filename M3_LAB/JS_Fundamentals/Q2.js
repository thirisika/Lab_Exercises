let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four;
console.log(addition);
let multiplication = three * four
console.log(multiplication);
let division = three / four
console.log(division)
let subtraction = three - four
console.log(subtraction)
let lessThan1 = three < four
console.log(lessThan1)
let lessThan2 = thirty < four
console.log(lessThan2)

console.log("\n")

console.log('------correction of code-------')

let correctAddition = Number(three) + Number(four);       // 7
console.log(correctAddition)
let correctlessThan2 = Number(thirty) < Number(four);     // false
console.log(correctlessThan2)
