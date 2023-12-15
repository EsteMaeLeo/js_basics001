//function returns another function

const getClientName = () => () => console.log("Joe Doe");

const fn = getClientName();

fn();
