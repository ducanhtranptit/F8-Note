// var numbers = [1, 2, 4, 5, 3, 5, 7, 2];

// var checkOdd = function (numbers) {
//   var check = numbers.every((number) => {
//     if (number % 2 === 0) {
//       return true;
//     }
//   });
//   return !check;
// };
// console.log(checkOdd(numbers));

// var checkOddv2 = function (numbers) {
//   var check = numbers.some((num) => {
//     return num % 2 === 1;
//   });
//   return check;
// };
// console.log(checkOddv2(numbers));

var checkOddV3 = function (numbers) {
  var check = numbers.some((num) => {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  return !check;
};
console.log(checkOddV3(numbers));
