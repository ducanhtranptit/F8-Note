var users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

//chuyển chuỗi thành json

var userJson = JSON.stringify(users);
console.log(userJson);
console.log(typeof userJson);

//chuyển json thành chuỗi

var user2 = JSON.parse(userJson);
console.log(user2);
