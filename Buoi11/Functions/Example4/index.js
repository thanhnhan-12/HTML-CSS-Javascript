var number = parseInt(prompt("Enter the number: ", number));

factorial(number);

function factorial() {
  var factor = 1;

  for(let i = 2; i <= number; i++) {
    factor *= i;
  }

  alert("Factorial of " + number + ": " + factor);
  return factor;
}