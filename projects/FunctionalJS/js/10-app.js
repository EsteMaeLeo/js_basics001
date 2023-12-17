//composition



function clientComp(name, email, company){
    let info ={
        name,
        email,
        company
    }
}

function employeeComp(name, email, job){
    let info ={
        name,
        email,
        job
    }
}

const newClient = clientComp('Jhon Hopkins', 'john@email.com', 'Apple')
const newEmployee = employeeComp('Peter Potter', 'petter@email.com', 'Manager')