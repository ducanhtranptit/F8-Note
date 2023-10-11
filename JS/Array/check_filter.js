// var user = ["ducanh", "bimbeo", "duc anh tran", "aloha", "photography"];
// var keyword = "asdf";
// var result = user.filter((user, keyword) => {
//   if (user.toLowerCase().includes(keyword.toLowerCase())) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(result);

var users = [
  ["nguyen van A", 10],
  ["nguyen van B", 20],
  ["nguyen van C", 30],
  ["nguyen van D", 50],
  ["nguyen van E", 40],
  ["nguyen van F", 60],
  ["nguyen van G", 11],
  ["nguyen van H", 21],
  ["nguyen van I", 31],
  ["nguyen van K", 41],
  ["nguyen van L", 51],
];

var minAge = 25;
var maxAge = 40;

var result = users.filter((client) => {
  if (client[1] >= minAge && client[1] <= maxAge) {
    return true;
  } else {
    return false;
  }
});

console.log(result);
