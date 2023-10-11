const product1 = {
  name: "Nồi cơm điện",
  price: 1299000,
  priceUnit: "đ", // đ, usd
  discount: 30,
  discountUnit: "%", // %, price,
  getPrice: function () {
    if (this.discountUnit === "%") {
      return this.price - this.price * (this.discount / 100);
    } else if (this.discountUnit === "price") {
      return this.price - this.discount;
    } else {
      return this.price;
    }
  },
  getTakePrime: function () {
    var expected = this.getPrice();
    console.log(`Expected: ${expected}`);
  },
};

product1.getTakePrime();
