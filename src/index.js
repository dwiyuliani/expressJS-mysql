require('dotenv').config()
const express = require("express");

const userRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");
const app = express();
const port = process.env.PORT;
const upload = require("./middleware/multer");

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets',express.static("public/imgs"));


app.use("/users", userRoutes);
app.post('/upload', upload.single('photo')  ,(req, res) => {
  console.log(req.file);

  res.json({
    message: "upload berhasil",
    data: req.file,
  });
});
app.use("/", (req, res, next) => {
  res.send("hahah")
});

// app.get("/", (req, res) => {
//   res.send("hello get ");
// });

// app.post("/", (req, res) => {
//     res.send("hello post ");
//   });

//midleware
app.use((err,req,res,next) => {
  res.status(500).send({
    message:"error",
    serverMessage:err.message,
  })
});

app.listen(port, () => console.log(`run in http://127.0.0.1:${port}`));
