let a = 2, b = 3;
let result = `${a} + ${b} is `;

(a+b<10) ? result += 'less than 10': result += 'greater than 10';

console.log(result);

console.log('\n-------Test it with different values-------')
a = 10, b = 23;
let result1 = `${a} + ${b} is `;

(a+b<10) ? result1 += 'less than 10': result1 += 'greater than 10';

console.log(result1);

console.log('\n condition (a + b < 10) is true, it will append "less than 10" to result if not ,it will append "greater than 10" to result')