console.log(
  (() => {
    return "hello world";
  })()
);

console.log(((hello) => hello)("hello world"));
