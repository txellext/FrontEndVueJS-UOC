// Declare variables
var num1 = +prompt("Give me number 1");
var num2 = +prompt("Give me number 2");

// Validation: numbers requested in range 1-50
function numbersValidation() {
  if (num1 > 50 || num2 > 50 || num1 < 1 || num2 < 1) {
    alert(
      "The numbers requested need to be positive integers between 1 and 50!"
    );
  }
}

// Summ function
function summNum1Num2(num1, num2) {
  let summ = num1 + num2;
  console.log(summ);
  //return summ;
}

// Prime function
function primeNum1Num2(num1, num2) {
  if ((num1 % num1 == 0) & (num2 % num2 == 0)) {
    console.log(num1 + " and " + num2 + " ara prime numbers");
  } else if ((num1 % num1 == 0) & (num2 % num2 != 0)) {
    console.log("Only " + num1 + " is a prime number");
  } else if ((num1 % num1 != 0) & (num2 % num2 == 0)) {
    console.log("Only " + num2 + " is a prime number");
  } else {
    console.log("None of them ara prime numbers");
  }
}

// Call functions
numbersValidation(num1, num2);
summNum1Num2(num1, num2);
primeNum1Num2(num1, num2);
