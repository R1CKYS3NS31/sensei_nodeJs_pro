const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      //     var form = new formidable.IncomingForm();
      //     form.parse(req, function (err, fields, files) {
      //       var oldpath = files.filetoupload.filepath;
      //       var newpath = '/home/rickysensei/Ricky_Sensei_Lab/Node/fileUpload/uploads/' + files.filetoupload.originalFilename;
      //       fs.rename(oldpath, newpath, function (err) {
      //         if (err) console.error(err);
      //         res.write('File uploaded and moved!');
      //         res.end();
      //       });
      //  });
      const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          // uploads is the upload_forlder_name
          cb(null, "uploads");
        },
        filename: (req, file, cb) => {
          cb(null, file.fieldname + "_" + Date.now + ".jpg");
        },
      });
      // define max size
      const maxSize = 1 * 1000 * 1000;

      const upload = multer({
        storage: storage,
        // limits: { fileSize: maxSize },
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
        // mypic is the name of the file attribute
      }).single("filetoupload");
      upload(req, res, (err) => {
        if (err) {
          console.error(err);
          res.write(err);
          res.end()
        } else {
          // success, image successfully uploaded
          res.write("success, image successfully uploade!");
          res.end()
        }
      });
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
