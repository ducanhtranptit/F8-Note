const user = {
  username: "bimbeo",
  email: "ducanhtran@email",
};

const course = {
  courseName: "ajdgergerg",
  coursePrice: "9999999",
  ...user, //spread operator
};

console.log(course);

const user2 = { ...user }; //user 2 se duoc luu khac o nho voi user

const user3 = JSON.parse(JSON.stringify(user)); //user 3 se duoc luu khac o nho voi user

console.log(user2);
console.log(user3);

//enhanced object literals

const name = "ducanhtran";
const email = "asdfa@email";
const address = "hanoi";
const job = "software engineer";

const client = {
  name,
  address,
  location: address,
  job: "photographer",
};

console.log(client);

const getMessage = function (opt) {
  console.log(opt);
};

getMessage({ email, job });
