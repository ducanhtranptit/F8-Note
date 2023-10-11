//serverUrl
var serverUrl = "https://jsonplaceholder.typicode.com/users";

//method: GET

//fetch() => trả về 1 promise

// fetch(serverUrl)
//   .then((response) => {
//     //trả về response
//     return response.json();
//   })
//   .then((data) => {
//     //trả về data
//     console.log(data);
//   });

var getPosts = async function () {
  var res = await fetch(serverUrl);
  console.log(res);
  var posts = await res.json();
  console.log(posts);
};

// getPosts();

var postData = async function (data) {
  var res = await fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(res);
};

// postData();

//thực hiện theo document:

//POST

var postData = function () {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      name: "TranDucAnh",
      user_name: "Bim",
      email: "abcxyz@gmail.com",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

postData();

//GET
var getData = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

getData();
