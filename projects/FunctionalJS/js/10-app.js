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

const showCompany = (info) => ({
  getCompany() {
    console.log(`Company: ${info.company}`);
  },
});

const showJob = (info) => ({
  getJob() {
    console.log(`Job: ${info.job}`);
  },
});

function clientComp(name, email, company) {
  let info = {
    name,
    email,
    company,
  };

  return Object.assign(
    info,
    showName(info),
    saveEmail(info),
    showEmail(info),
    showCompany(info)
  );
}

function employeeComp(name, email, job) {
  let info = {
    name,
    email,
    job,
  };

  return Object.assign(
    info,
    showName(info),
    saveEmail(info),
    showEmail(info),
    showJob(info)
  );
}

console.log("--composition--");
const newClient = clientComp("Jhon Hopkins", null, "Apple");
newClient.getName();
newClient.setEmail("john@email.com");
newClient.getEmail();
newClient.getCompany();
console.log("-*-*-*-*-*-*-*-*-*-*-*");

const newEmployee = employeeComp("Peter Potter", null, "Manager");
newEmployee.getName();
newEmployee.setEmail("petter@email.com");
newEmployee.getEmail();
newEmployee.getJob();
