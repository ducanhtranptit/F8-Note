var Products = [
  1,
  2,
  ["asdf"],
  { name: "asfd", price: 2 },
  { name: "asfd", price: 1 },
  { name: "asfd", price: 12344 },
  { name: "dsv", price: 12453 },
];

var satisfyProducts = Products.filter((element) => element.price !== undefined);

console.log(satisfyProducts);

var result = satisfyProducts.reduce((maxPriceProduct, currentProduct) => {
  if (currentProduct.price > maxPriceProduct.price) {
    return currentProduct;
  }
  return maxPriceProduct;
});

console.log(result);
