console.log(1);
console.log(2);

//nếu try có lỗi thì chạy sang catch
//catch sẽ trả về lỗi đầu tiên trong try
//finally là cái cuối cùng sẽ chạy bất kể try và catch

try {
  console.log(a);
} catch (exception) {
  console.log(exception.message);
} finally {
  console.log("oke");
}
console.log(3);
