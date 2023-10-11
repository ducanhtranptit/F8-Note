const bodyParser = require("body-parser");

module.exports = {
  index: (req, res) => {
    //get query
    const { keyword } = req.query;
    // console.log(`keyword = ${keyword}`);

    return res.send("Products");
  },

  get: (req, res) => {
    const { id } = req.params;
    return res.send(`product imformation: product id = ${id}`);
  },

  add: (req, res) => {
    const { msg } = req.session;

    delete req.session.msg;

    console.log(msg);
    return res.render("Products/add", { msg });
  },

  handleAdd: (req, res) => {
    const { name, price } = req.body;
    console.log(name, price);
    console.log(req.headers["user-agent"]);
    req.session.msg = "please enter all information";
    return res.redirect("/product/add");
  },

  getDataPayload: (req, res) => {},
};
