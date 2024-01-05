function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

let result = add(2, 2);
let expectedResult = 3;

expected(expectedResult).toBe(result);

result = subtraction(10, 5);
expectedResult = 5;

expected(expectedResult).toBe(result);
expected(expectedResult).toEqual(result);

function expected(expectedResult) {
  return {
    toBe(result) {
      if (result !== expectedResult) {
        console.error("TEST FAIL: ", result);
      } else {
        console.log("TEST toBe successfully pass ", result);
      }
    },
    toEqual(result) {
      if (result !== expectedResult) {
        console.error("TEST FAIL result not equal: ", result);
      } else {
        console.log("TEST ToEqual successfully pass ", result);
      }
    },
  };
}

