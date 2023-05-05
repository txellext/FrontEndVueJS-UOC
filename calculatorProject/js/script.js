// Validation: numbers requested in range 1-50
function numbersValidation(num1, num2) {
  let result = "";
  let stop = false;
  if (num1 > 50 || num2 > 50 || num1 < 1 || num2 < 1) {
    //console.log("The numbers requested need to be positive integers between 1 and 50!" + "\n");
    alert(
      (result =
        "The numbers requested need to be positive integers between 1 and 50!" +
        "\n")
    );
  } else {
    stop = true;
    //console.log("The numbers requested are correct" + stop);
  }
  return { result, stop };
}

// Sum function
function sumNum1Num2(num1, num2) {
  let sum = num1 + num2;
  //console.log("The sum is: " + sum);
  return "The sum is: " + sum;
}

// Prime function
function primeNum1Num2(num1, num2) {
  let arrayNums = [num1, num2];
  let arrayResult = [];

  for (let i = 0; i < arrayNums.length; i++) {
    let isPrime = true;

    if (arrayNums[i] === 1) {
      isPrime = false;
    } else if (arrayNums[i] > 1) {
      let j = 1;
      while (j < arrayNums[i] || isPrime) {
        if (arrayNums[i] % j == 0) {
          isPrime = false;
        }

        j++;
      }
    }

    if (!isPrime) {
      arrayResult.push(" " + arrayNums[i] + " is not a prime number");
    } else {
      arrayResult.push(" " + arrayNums[i] + " is a prime number");
    }
  }
  return arrayResult;
}

// Even Odd function
function evenOddNum1Num2(num1, num2) {
  let result;
  let i = 2;
  if ((num1 % i == 0) & (num2 % i == 0)) {
    //console.log(num1 + " and " + num2 + " ara even numbers");
    result = num1 + " and " + num2 + " ara even numbers";
  } else if ((num1 % i == 0) & (num2 % i != 0)) {
    //console.log(num1 + " is an even number and " + num2 + " is an odd number");
    result = num1 + " is an even number and " + num2 + " is an odd number";
  } else if ((num1 % i != 0) & (num2 % i == 0)) {
    //console.log(num2 + " is an even number and " + num1 + " is an odd number");
    result = num2 + " is an even number and " + num1 + " is an odd number";
  } else {
    //console.log("Both " + num1 + "and " + num2 + " are odd numbers");
    result = "Both " + num1 + " and " + num2 + " are odd numbers";
  }
  return result;
}

// list numbers function
function range(num1, num2) {
  let arrayList = [];
  if (num1 < num2) {
    for (i = num1; i <= num2; i++) {
      if (i % 2 == 0) {
        arrayList.push(i);
      }
    }
  } else if (num1 > num2) {
    for (i = num1; i >= num2; i--) {
      if (i % 2 != 0) {
        arrayList.push(i);
      }
    }
  } else {
    arrayList.push(num1);
  }
  return "Range: " + arrayList;
  //console.log("Range: " + arrayList);
}

// Call functions (calculation function with a while or do while using numbersValidation() as a condition)

function calculation() {
  let num1;
  let num2;

  do {
    num1 = +prompt("Give me number 1");
    num2 = +prompt("Give me number 2");

    let validationOutput = numbersValidation(num1, num2);
    //console.log(validationOutput, "validationOutput");
    result = validationOutput.result;
    stop = validationOutput.stop;
  } while (!stop);

  result += sumNum1Num2(num1, num2) + "\n";
  result += primeNum1Num2(num1, num2) + "\n";
  result += evenOddNum1Num2(num1, num2) + "\n";
  result += range(num1, num2);
  alert(result);
}
