var serverUrl = "https://jsonplaceholder.typicode.com/todos";

//GET
async function getUsers() {
  try {
    let res = await fetch(serverUrl);
    let data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
    throw error;
  }
}

async function getUsersById(id) {
  try {
    let url = `${serverUrl}/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
    throw error;
  }
}

//POST
async function createUser(user) {
  try {
    let res = await fetch(serverUrl, {
      method: "POST",
      body: JSON.stringify({
        title: user.title,
        completed: user.completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
    throw error;
  }
}

//PUT
async function updateUser(id, user) {
  try {
    let url = `${serverUrl}/${id}`;
    let res = await fetch(url, {
      body: JSON.stringify({
        title: user.title,
        completed: user.completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
    throw error;
  }
}

//DELETE
async function deleteUserById(id) {
  try {
    let url = `${serverUrl}/${id}`;
    let res = await fetch(url, {
      method: "DELETE",
    });
    return "Deleted!";
  } catch (error) {
    console.log(`ERROR: ${error}`);
    throw error;
  }
}
