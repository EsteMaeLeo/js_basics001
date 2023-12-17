//composition

const showName = (info) => ({
  getName() {
    console.log(`Name: ${info.name}`);
  },
});

const saveEmail = (info) => ({
  setEmail(email) {
    console.log(`Saving email in: ${info.name}`);
    info.email = email;
  },
});

const showEmail = (info) => ({
  getEmail() {
    console.log(`Email: ${info.email}`);
  },
});

function clientComp(name, email, company) {
  let info = {
    name,
    email,
    company,
  };

  return Object.assign(info, showName(info), saveEmail(info),  showEmail(info));
}

function employeeComp(name, email, job) {
  let info = {
    name,
    email,
    job,
  };

  return Object.assign(info, showName(info), saveEmail(info),  showEmail(info));
}

console.log("--composition--");
const newClient = clientComp("Jhon Hopkins", null, "Apple");
newClient.getName();
newClient.setEmail("john@email.com");
newClient.getEmail();

const newEmployee = employeeComp("Peter Potter", null, "Manager");
newEmployee.getName();
newEmployee.setEmail("petter@email.com");
newEmployee.getEmail();