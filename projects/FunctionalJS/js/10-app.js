//composition

const getName = (info) => ({
  showName() {
    console.log(`Name: ${info.name}`);
  },
});

const saveEmail = (info) => ({
  setEmail(email) {
    console.log(`Saving email in: ${info.name}`);
    info.email = email;
  },
});

function clientComp(name, email, company) {
  let info = {
    name,
    email,
    company,
  };

  return Object.assign(info, getName(info), saveEmail(info));
}

function employeeComp(name, email, job) {
  let info = {
    name,
    email,
    job,
  };

  return Object.assign(info, getName(info), saveEmail(info));
}

console.log("--composition--");
const newClient = clientComp("Jhon Hopkins", null, "Apple");
newClient.showName();
const newEmployee = employeeComp("Peter Potter", null, "Manager");
newEmployee.showName();
