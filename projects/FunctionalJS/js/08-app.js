//closures  make available variable in function out the function scope

console.log("--closures--");

const clientClosure = "William";

function showClientClosure() {
  const clientClosure = "Joseph";

  console.log(clientClosure);
}

console.log(clientClosure);

showClientClosure();

function getClientClosure() {
  const clientClosure = "Joseph Closure";

  function showNameClosure() {
    console.log(clientClosure);
  }

  return showNameClosure;
}

const clientShowClosure = getClientClosure();

clientShowClosure();
