// async function: luôn trả về một promise

var getMessage = async function () {
  return "hello wrold";
};

var getA = function (check) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        resolve("hello world");
      } else {
        reject("ERROR 500");
      }
    }, 20);
  });
};

var getB = function () {
  return "hien thi ket qua";
};

var showResult = async function () {
  try {
    var response = await getA(true);
    var response2 = getB();
    console.log(response);
    console.log(response2);
  } catch (error) {
    console.log(error);
  }
};

// showResult();

var getA = function (check) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        resolve("A");
      } else {
        reject("ERROR 500");
      }
    }, 200);
  });
};

var getB = function (check) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        resolve("B");
      } else {
        reject("ERROR 500");
      }
    }, 50);
  });
};

var getC = function (check) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        resolve("C");
      } else {
        reject("ERROR 500");
      }
    }, 100);
  });
};

var result = async function () {
  try {
    var response = await getA(true);
    console.log(response);
    var response2 = await getB(false);
    console.log(response2);
    var response3 = await getC(true);
    console.log(response3);
  } catch (error) {
    console.log(error);
  }
};

// result();

var request = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
        getData: function () {
          return new Promise((resolve) => {
            resolve("getData");
          });
        },
      };
      resolve(response);
    }, 100);
  });
};

var showData = async function () {
  var response = await request();
  var data = await response.getData();
  console.log(data);
};

showData();
