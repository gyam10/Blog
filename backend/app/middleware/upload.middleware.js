const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url: "mongodb+srv://test:test123@cluster0.lls5sy9.mongodb.net/blog?retryWrites=true&w=majority",
  options: { useNewUrlParser: true },
  file: (req, file) => {
    const check = ["image/png", "image/jpg"];
    if (check.indexOf(file.nameType) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
