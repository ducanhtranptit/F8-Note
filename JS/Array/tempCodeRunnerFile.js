var user = ["ducanh", "bimbeo", "duc anh tran", "aloha", "photography"];
var keyword = "asdf";
var result = user.filter((user, keyword) => {
  if (user.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  } else {
    return false;
  }
});

console.log(result);
