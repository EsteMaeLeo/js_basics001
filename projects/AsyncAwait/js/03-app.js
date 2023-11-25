function downloadNewClient() {
  return new Promise((resolve, reject) => {
    const error = false;
    console.log("Downloading the new clients list");
    setTimeout(() => {
      if (!error) {
        resolve("Downloaded new client list");
      } else {
        reject("Connection error second !");
      }
    }, 5000);
  });
}

function downloadNewOrder() {
  return new Promise((resolve, reject) => {
    const error = false;
    console.log("Downloading the orders");
    setTimeout(() => {
      if (!error) {
        resolve("Downloaded order list");
      } else {
        reject("Connection error second !");
      }
    }, 3000);
  });
}

const app = async () => {
  try {
    /*const client = await downloadNewClient();
    console.log(client);

    const orders = await downloadNewOrder();
    console.log(orders);*/

    const response = await Promise.all([
      downloadNewClient(),
      downloadNewOrder(),
    ]);
    console.log(response);
    console.log(response[0]);
    console.log(response[1]);
  } catch (error) {
    console.log(error);
  }
};

app();
