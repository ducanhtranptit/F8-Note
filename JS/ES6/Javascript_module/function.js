export const user = {
  username: "bimbeo",
  age: 19,
};

export default function sum() {
  let sum = 0;
  for (let i = 1; i < 5; i++) {
    sum += i;
  }
  return sum;
}
