const Render = require("../core/Render");
const product = require("../modules/Product");
const upload = require("../modules/Upload");
let url = require("url");

class Path {
  index = (req, res) => {
    const router = {
      "": "home",
      "/gioithieu": "about",
      "/sanpham": "product",
      "/sanpham/them": "product_add",
      "/sanpham/giohang": "product_cart",
      "/upload": "file_upload",
    };

    let pathView = "home";

    url = url.parse(req.url);
    const path = url.pathname.replace(/\/*$/, "");
    console.log(path);
    pathView = router[path];
    console.log(pathView);

    switch (pathView) {
      case "home":
        Render.render(pathView, req, res);
        break;
      case "about":
        Render.render(pathView, req, res);
        break;
      case "product":
        Render.render(pathView, req, res);
        break;
      case "product_add":
        product.add(req, res);
        break;
      case "product_cart":
        product.cart(req, res);
        break;
      case "file_upload":
        if (req.method === "POST") {
          upload.handleUpload(req, res);
        } else {
          upload.upFile(req, res);
        }
        break;
      default:
        Render.render("error", req, res);
    }
  };
}

module.exports = new Path();
