const fs = require("fs");

class Render {
  render = (path, req, res) => {
    fs.readFile(`./src/views/${path}.html`, "utf-8", (err, data) => {
      res.end(data);
    });
  };
}

module.exports = new Render();
