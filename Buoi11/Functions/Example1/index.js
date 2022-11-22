var val1 = parseInt(prompt("Enter the first number for addition"));
var val2 = parseInt(prompt("Enter the second number for addition"));

add(val1, val2);

function add(num1, num2) {
  let result = num1 * num2;
  alert("Additon result: "+ result);
}