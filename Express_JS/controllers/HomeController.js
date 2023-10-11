module.exports = {
  index: (req, res) => {
    // return res.send("Home Page");
    const title = "hello world";
    const products = ["product 1", "product 2", "product 3", "product 4"];
    return res.render("Home/index", { title, products });
  },
};
