//closures  make available variable in function out the function scope

console.log("--closures--")

const ClientClosure = 'William'

function showClientClosure(){
    const ClientClosure = 'Joseph'

    console.log(ClientClosure)
}

console.log(ClientClosure)

showClientClosure()