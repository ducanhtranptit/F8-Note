const fs = require("fs");

class Add {
  add = (req, res) => {
    const query = {};
    const queryString = req.url.split("?").slice(-1).join();
    if (queryString) {
      const search = new URLSearchParams(queryString);
      query.keyword = search.get("keyword");
      query.category = search.get("category");
    }

    console.log(query);

    let data = {};
    req.on("data", (buffer) => {
      const body = buffer.toString();
      if (body) {
        const bodyObj = new URLSearchParams(body);
        data.name = bodyObj.get("name");
        data.email = bodyObj.get("email");
      }
    });

    req.on("end", () => {
      console.log(data.name);

      const errors = {
        "error.name": "",
        "error.email": "",
      };

      if (!data.name) {
        errors["error.name"] = "Vui lòng nhập tên";
      }

      if (!data.email) {
        errors["error.email"] = "Vui lòng nhập email";
      }

      console.log(errors);

      fs.readFile(`./src/views/product_add.html`, "utf8", (err, viewContent) => {
        if (err) {
          console.error("Error reading view file:", err);
          return;
        }

        const result = viewContent.match(/{.+?}/g);
        if (result && result.length) {
          for (const item of result) {
            const itemKey = item.replaceAll("{", "").replaceAll("}", "");
            if (errors[itemKey]) {
              viewContent = viewContent.replaceAll(item, errors[itemKey]);
            } else {
              viewContent = viewContent.replaceAll(item, "");
            }
          }
        }
        res.end(viewContent);
      });
    });
  };

  cart = (req, res) => {
    const cookie = req.headers.cookie;
    console.log(cookie);
    res.end("Giỏ hàng");
  };
}

module.exports = new Add();
