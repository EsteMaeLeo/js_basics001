function add(a, b) {
    return a + b;
  }
  
  function subtraction(a, b) {
    return a - b;
  }
  
  async function addAsync (a, b) {
    return a + b;
  }

  let result = add(2, 2);
  let expectedResult = 3;
  
  expected(expectedResult).toBe(result);
  
  result = subtraction(10, 5);
  expectedResult = 5;
  
  expected(expectedResult).toBe(result);
  expected(expectedResult).toEqual(result);

  test('Add 10 + 20, result should be 30', async ()=>{
    let result = await addAsync(10, 20);
    let expectedResult = 30;
    expected(expectedResult).toBe(result);
  })

  async function test(message, callback){
    try{
        await callback()
        console.log(`Test ${message} executed successfully`)
    }catch(error){
        console.error("Error: ")
        console.error(error)
    }
  }
  
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
  
  