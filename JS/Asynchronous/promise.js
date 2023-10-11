class Promise2 {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.error = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
      }
    };

    const reject = (error) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.error = error;
        this.onRejectedCallbacks.forEach((callback) => callback(this.error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const newPromise = new Promise2((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          if (typeof onFulfilled === "function") {
            const result = onFulfilled(value);
            resolve(result);
          } else {
            resolve(value);
          }
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = (error) => {
        try {
          if (typeof onRejected === "function") {
            const result = onRejected(error);
            resolve(result);
          } else {
            reject(error);
          }
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === "fulfilled") {
        setTimeout(() => {
          handleFulfilled(this.value);
        }, 0);
      } else if (this.state === "rejected") {
        setTimeout(() => {
          handleRejected(this.error);
        }, 0);
      } else {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });

    return newPromise;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => Promise2.resolve(onFinally()).then(() => value),
      (error) =>
        Promise2.resolve(onFinally()).then(() => {
          throw error;
        })
    );
  }

  static resolve(value) {
    return new Promise2((resolve) => resolve(value));
  }

  static reject(error) {
    return new Promise2((resolve, reject) => reject(error));
  }
}

function getA(check) {
  var myPromise = new Promise2((resolve, reject) => {
    setTimeout(() => {
      var data = "A";
      if (check) resolve(data);
      else reject("ERROR");
    }, 200);
  });

  return myPromise;
}

function getB() {
  console.log("B");
}

getA(true).then((response) => {
  console.log(response);
});
