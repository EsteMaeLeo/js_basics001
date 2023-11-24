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

function execute() {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

execute();
