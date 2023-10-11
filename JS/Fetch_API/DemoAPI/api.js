const serverUrl = "https://jsonplaceholder.typicode.com/posts";

async function getUsers() {
  try {
    let res = await fetch(serverUrl);
    let data = await res.json();
    displayData(data);
    return data;
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
}

async function getUsersById() {
  const userIdInput = document.getElementById("userId");
  const userId = userIdInput.value.trim();

  if (userId === "") {
    alert("Please enter a valid user ID.");
    return;
  }

  try {
    let url = `${serverUrl}/${userId}`;
    let res = await fetch(url);
    let data = await res.json();
    displayData(data);
    return data;
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
}

async function createUser() {
  const titleInput = document.getElementById("title");
  const completedCheckbox = document.getElementById("completed");

  const user = {
    title: titleInput.value.trim(),
    completed: completedCheckbox.checked,
  };

  try {
    let res = await fetch(serverUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await res.json();
    displayData(data);
    return data;
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
}

async function updateUser() {
  const updateUserIdInput = document.getElementById("updateUserId");
  const updateTitleInput = document.getElementById("updateTitle");
  const updateCompletedCheckbox = document.getElementById("updateCompleted");

  const user = {
    title: updateTitleInput.value.trim(),
    completed: updateCompletedCheckbox.checked,
  };

  const userId = updateUserIdInput.value.trim();

  if (userId === "") {
    alert("Please enter a valid user ID.");
    return;
  }

  try {
    let url = `${serverUrl}/${userId}`;
    let res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await res.json();
    displayData(data);
    return data;
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
}

async function deleteUserById() {
  const deleteUserIdInput = document.getElementById("deleteUserId");
  const userId = deleteUserIdInput.value.trim();

  if (userId === "") {
    alert("Please enter a valid user ID.");
    return;
  }

  try {
    let url = `${serverUrl}/${userId}`;
    let res = await fetch(url, {
      method: "DELETE",
    });
    let data = await res.json();
    displayData(data);
    return data;
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
}

// Function để hiển thị dữ liệu lên giao diện
function displayData(data) {
  const outputDiv = document.getElementById("output");
  const dataHTML = JSON.stringify(data, null, 2);
  outputDiv.innerHTML = `<pre>${dataHTML}</pre>`;
}
