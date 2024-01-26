const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/imgs");
  },
  filename: function (req, file, cb) {
    const timestamp = new Date().getTime();
    const originalName = file.originalname;

    cb(null, `${timestamp}-${originalName}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 3 * 1000 * 1000, //3MB
  },
});

module.exports = upload;
