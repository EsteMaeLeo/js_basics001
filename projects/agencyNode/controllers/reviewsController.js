const saveReviews = (req, res) => {
  //validate
  const { name, email, message } = req.body;

  const errorLog = [];
  if (name.trim() === "") {
    errorLog.push({ message: "Name is empty" });
  }
  if (email.trim() === "") {
    errorLog.push({ message: "email is empty" });
  }
  if (message.trim() === "") {
    errorLog.push({ message: "message is empty" });
  }
  console.log(errorLog);
};

export { saveReviews };
