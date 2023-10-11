numbers = [1, 4, 3, 2, 9, 6, 8, 5];

var findMax = function () {
  result = numbers.reduce((max, number) => {
    if (number > max) {
      max = number;
    }
    console.log(max, number);
    return max;
  });
  return result;
};

console.log(findMax());

var arr1 = [1, 2, 3, 4, 5, 6, 9];
var arr2 = [3, 4, 5, 6, 8];
var newArr = [];
if (arr1.length > arr2.length) {
  [arr1, arr2] = [arr2, arr1];
}
for (i = 0; i < arr2.length; i++) {
  if (!arr1.includes(arr2[i])) {
    newArr.push(arr2[i]);
  }
}
console.log(newArr);

var arr1 = [1, 4, 3, 2];
var arr2 = [5, 2, 6, 7, 1];
var diff = arr1.reduce((pre, current) => {
  if (arr2.includes(current)) {
    pre.push(current);
  }
  return pre;
}, []);

console.log(diff);

// có thể hiểu vòng lặp reduce là parameter thứ 2 sẽ lặp theo thứ tự của mảng nhập vào còn parameter thứ nhất sẽ lấy từ return từ hàm callback ở phía trong
