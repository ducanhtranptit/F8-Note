function getA(callback) {
  setTimeout(() => {
    console.log("A");
    callback();
  }, 20);
}

function getB(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 50);
}

function getC() {
  console.log("c");
}
getA(() => {
  getB(() => {
    getC();
  });
});
// callback hell :>
