const prompt = require('prompt-sync')(); 

function calculate(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    switch (operation) {
      case '+':
        resolve(num1 + num2);
        break;
      case '-':
        resolve(num1 - num2);
        break;
      case '*':
        resolve(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          reject('Error: Division by zero');
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject('Error: Invalid operation');
    }
  });
}

const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));
const operation = prompt('Enter operation (+, -, *, /: ');

calculate(num1, num2, operation)
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.error(error);
  });


  