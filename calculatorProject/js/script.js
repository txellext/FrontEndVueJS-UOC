var num1 = prompt("Give me number 1");
var num2 = prompt("Give me number 2");

// Validation: numbers requested in range 1-50
function numbersValidation() {
    if (num1 > 50 || num2 > 50 || num1 < 1 || num2 < 1) {
        alert("The numbers requested need to be positive integers between 1 and 50!");
      }
};




