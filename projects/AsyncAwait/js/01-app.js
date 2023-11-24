function downloadClient() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) {
        resolve("Client list downloaded successfully");
      } else {
        reject("Connection error!");
      }
    }, 3000);
  });
}

async function execute() {
  try {
    const response = await downloadClient();
    console.log(2 + 2);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

execute();
