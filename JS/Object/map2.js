Array.prototype.map2 = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i);
    arr.push(callback(this[i], i));
  }
  return arr;
};

var users = ["item1", "item2", "item3"];

var result = users.map2(function (user) {
  return `hello ${user}`;
});

console.log(users);
