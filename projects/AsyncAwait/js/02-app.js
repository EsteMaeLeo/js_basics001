function downloadClient2() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) {
        resolve("Client list downloaded successfully arrow");
      } else {
        reject("Connection error second !");
      }
    }, 3000);
  });
}
//difference
async function execute_function() {
    try {
      const response = await downloadClient();
      console.log(2 + 2);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  

const execute_arrow = async () => {
  try {
    const response = await downloadClient2();
    console.log(2 + 2);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

execute_arrow();
