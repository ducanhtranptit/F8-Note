//object

const user = {
  name: "bimbeo",
  email: "tda.ducanh@gmail.com",
  age: 22,
  address: "Hanoi",
  province: undefined,
};

const {
  name: username,
  email,
  province = "ninh binh",
  age = 16,
  addressShipping = "mo lao",
} = user;
// console.log(email); // lay gia tri trong object cha
// console.log(username); // sua doi key
// console.log(province); //thay doi gia tri trong object cha
// console.log(age); //neu
// console.log(addressShipping);
// console.log(user);

//array

const client = ["bimbeo", "tda.ducanh@gmail.com", 23];

const [clientName, clientEmail, clientAge] = client;

// console.log(clientEmail);

const getMessage = function ({ name, email }) {
  console.log(name, email);
};

// getMessage({
//   name: "bimbeo",
//   email: "ducanh@gmail.com",
// });

const posts = [
  {
    id: 1,
    title: "bai 1",
  },
  {
    id: 2,
    title: "bai 2",
  },
  {
    id: 3,
    title: "bai 3",
  },
];

const html = posts
  .map(({ id, title: postTitle }) => {
    return `${id} - ${postTitle}`;
  })
  .join(" % ");

console.log(html);
