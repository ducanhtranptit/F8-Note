const users = "hello world";
if (users?.length) {
  console.log("yes");
  users.forEach?.((user) => {
    console.log(user);
  });
} else {
  console.log("no");
}
