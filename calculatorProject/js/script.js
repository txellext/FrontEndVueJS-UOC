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

// Sum function
function sumNum1Num2(num1, num2) {
  let sum = num1 + num2;
  console.log("The sum is: " + sum);
  //return alert('The sum is: ' + sum);
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

// Even Odd function
function evenOddNum1Num2(num1, num2) {
  if ((num1 % 2 == 0) & (num2 % 2 == 0)) {
    console.log(num1 + " and " + num2 + " ara even numbers");
  } else if ((num1 % 2 == 0) & (num2 % 2 != 0)) {
    console.log(num1 + " is an even number and " + num2 + " is an odd number");
  } else if ((num1 % 2 != 0) & (num2 % 2 == 0)) {
    console.log(num2 + " is an even number and " + num1 + " is an odd number");
  } else {
    console.log("Both " + num1 + "and " + num2 + " are odd numbers");
  }
}

// Call functions
numbersValidation(num1, num2);
sumNum1Num2(num1, num2);
primeNum1Num2(num1, num2);
evenOddNum1Num2(num1, num2);
