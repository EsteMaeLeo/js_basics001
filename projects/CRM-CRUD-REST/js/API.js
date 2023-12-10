const url = "http://localhost:4001/clientes";

const newClient = (client) => {
  console.log(client);

  try {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

const getClient = async () => {
  try {
    const result = await fetch(url);
    const client = await result.json();
    return client;
  } catch (error) {
    console.log(error);
  }
};

const deleteClient = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

const getClientId = async (id) => {
  console.log(id);
  try {
    const result = await fetch(`${url}/${id}`);
    const client = await result.json();

    return client;
  } catch (error) {
    console.log(error);
  }
};

const editClient = async (client) => {
  try {
    await fetch(`${url}/${client.id}`, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = 'index.html'
  } catch (error) {
    console.log(error);
  }
};

export { newClient, getClient, deleteClient, getClientId, editClient };
