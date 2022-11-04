const http = require("http");
const multer = require("multer");
const path = require("path");

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          // uploads is the upload_forlder_name
          cb(null, "uploads");
        },
        filename: (req, file, cb) => {
          cb(null, file.fieldname + "_" + Date.now() + ".jpg");
        },
      });
      // define max size
      const maxSize = 1 * 1000 * 1000;

      const upload = multer({
        storage: storage,
        limits: { fileSize: maxSize },
        // filter to accept only images
        fileFilter: (req, file, cb) => {
          let fileTypes = /jpeg|jpg|png/;
          var mimetype = fileTypes.test(file.mimetype);
          const extname = fileTypes.test(
            path.extname(file.originalname).toLowerCase()
          );
          if (mimetype && extname) {
            return cb(null, true);
          }
          cb(
            "Error: File upload only support the the following filetypes: " +
              fileTypes
          );
        },
        // filetoupload is the name of the input file attribute in the form
      }).single("filetoupload");
      try {
        upload(req, res, (err) => {
          if (err instanceof multer.MulterError) {
            console.error("multer error: " + err);
            return res.write(err.code);
          } else if (err) {
            // unknown error
            console.error(err);
          } else {
            // success, image successfully uploaded
            res.write("success, image successfully uploade!");
            res.end();
          }
        });
      } catch (err) {
        console.error(err);
        res.write(err);
        res.end();
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload" required><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8080);