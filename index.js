const operationContainer = document.getElementById('wrapper');

operationContainer.addEventListener('click', (event) => {
  // Ensure only the buttons with specified classes trigger the arithmetic operations
  if (event.target.classList.contains('x') || event.target.classList.contains('y') || event.target.classList.contains('z') || event.target.classList.contains('q')) {
    const input1 = document.getElementById('a');
    const input2 = document.getElementById('b');
    const num1 = parseFloat(input1.value); // Convert string into floating point number
    const num2 = parseFloat(input2.value);
    const operation = event.target.id;
    const result = document.getElementById('C');

    switch (operation) {
      case '+':
        result.innerHTML = "Result:- " + (num1 + num2);
        break;
      case '-':
        result.innerHTML = "Result:- " + (num1 - num2);
        break;
      case '*':
        result.innerHTML = "Result:- " + (num1 * num2);
        break;
      case '/':
        result.innerHTML = "Result:- " + (num1 / num2).toFixed(2);
        break;
      default:
        throw new Error('Unsupported operator');
    }
  }
});

const clearButton = document.getElementById('clear1');
clearButton.addEventListener('click', () => {
  const result = document.getElementById('C');
  result.innerHTML = "Result:- ";
  const input1 = document.getElementById('a');
  const input2 = document.getElementById('b');
  input1.value = ""; // Clear the input field value
  input2.value = ""; // Clear the input field value
});
