//scope
console.log("---SCOPE---");

const client = "Charles"

function showClient(){
    
    const client = "William"
    console.log(client)

}

console.log(client)

showClient()

//hosting
console.log("---HOSTING---");

showClientFunction('Paul')
function showClientFunction(name){
    console.log(`Client name is ${name}`)
}

const showNameExpresion = function (name){
    console.log(`Client name is ${name}`)
}

showNameExpresion('Mike')
