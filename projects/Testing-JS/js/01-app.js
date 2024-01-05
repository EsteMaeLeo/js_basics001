function add(a, b) {
  return a + b;
}

let result = add(2, 2);
let expected = 3;

if(result !== expected){
    console.error("TEST FAIL: ", result)
}else{
    console.log("TEST successfully pass ",result)
}