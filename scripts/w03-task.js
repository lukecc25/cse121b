/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2){
/* Function Definition - Add Numbers */
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}
  
const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};
  
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(dividend, divisor) {
    return dividend / divisor;
}

/* Decision Structure */

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
};
  
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
/* Selection Structures */

document.querySelector('#getTotal').addEventListener('click', () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let applyDiscount = document.querySelector('#member').checked;
  
    if (applyDiscount) {
      subtotal *= 0.8; 
    }
  
    let totalDue = subtotal.toFixed(2);
    document.querySelector('#total').innerText = `$ ${totalDue}`;
});
  
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let arrayVariable = Array.from({ length: 13 }, (_, i) => i + 1);
document.querySelector('#array').innerText = arrayVariable.toString();

/* Output Odds Only Array */

let odds = arrayVariable.filter(num => num % 2 !== 0);
document.querySelector('#odds').innerText = odds.toString();

/* Output Evens Only Array */

let evens = arrayVariable.filter(num => num % 2 === 0);
document.querySelector('#evens').innerText = evens.toString();

/* Output Sum of Org. Array */

let sumOfArray = arrayVariable.reduce((acc, num) => acc + num, 0);
document.querySelector('#sumOfArray').innerText = sumOfArray.toString();

/* Output Multiplied by 2 Array */

let multiplied = arrayVariable.map(num => num * 2);
document.querySelector('#multiplied').innerText = multiplied.toString();

/* Output Sum of Multiplied by 2 Array */

let sumOfMultiplied = arrayVariable.map(num => num * 2).reduce((acc, num) => acc + num, 0);
document.querySelector('#sumOfMultiplied').innerText = sumOfMultiplied.toString();