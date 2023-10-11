const formidable = require("formidable");
const path = require("path"); // Module để làm việc với đường dẫn tập tin và thư mục
const fs = require("fs");

class Upload {
  upFile = (req, res) => {
    fs.readFile(`./src/views/file_upload.html`, "utf-8", (err, data) => {
      res.end(data);
    });
  };

  handleUpload = async (req, res) => {
    // Đường dẫn đến thư mục lưu trữ tập tin tải lên
    const uploadDir = path.join("./src/public", "uploads");

    // Kiểm tra nếu thư mục không tồn tại thì tạo mới
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    // Tạo đối tượng formidable để xử lý tải lên tập tin
    const form = new formidable.IncomingForm();
    form.uploadDir = uploadDir;
    form.keepExtensions = true;

    // Hàm xử lý tải lên tập tin
    const uploadImage = async (req, res) => {
      try {
        return await new Promise((resolve, reject) => {
          form.parse(req, async (err, fields, files) => {
            if (err) return reject(err);
            const pathFile = files["file"][0]; // Lấy đối tượng tập tin từ biểu mẫu
            const nameFile = pathFile.originalFilename; // Lấy tên gốc của tập tin
            const fileType = pathFile.mimetype; // Lấy kiểu MIME của tập tin

            // Di chuyển tập tin tải lên vào thư mục lưu trữ
            fs.rename(pathFile.filepath, path.join(uploadDir, nameFile), (err) => {
              if (err) return reject(err);
              return resolve({ nameFile, fileType }); // Trả về thông tin tập tin đã tải lên
            });
          });
        });
      } catch (err) {
        // Trả về lỗi nếu có vấn đề trong quá trình xử lý
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(err.message);
      }
    };
    // Gọi hàm uploadImage để xử lý tải lên tập tin từ request
    const { nameFile, fileType } = await uploadImage(req, res);

    // Đặt mã trạng thái 200 và kiểu dữ liệu của response
    res.writeHead(200, { "Content-Type": fileType });

    // Đọc nội dung tập tin đã tải lên từ đường dẫn và gửi nó về response
    res.end(fs.readFileSync(`${uploadDir}/${nameFile}`), "binary");
  };
}

module.exports = new Upload();
