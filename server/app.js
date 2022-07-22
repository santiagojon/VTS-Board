// require('dotenv').config()
const cloudinary = require("cloudinary-react");
const formData = require("express-form-data");
const cors = require("cors");
const { CLIENT_ORIGIN } = require("./config");
// const socketio = require('socket.io')

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
module.exports = app;

const server = require('http').Server(app);


// const http = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

server.listen(8080, function() {
  console.log('listening on chat 8080')
})

//********************* */

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// auth and api routes
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

// cloud configuration
// cloudinary.config({
//   cloud_name: 'vtsboardfsa',
//   api_key: '781486855278427',
//   api_secret: 'y8nu3mugrUVWLkqU1pEWM9J3hH8'
// })

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.get("/wake-up", (req, res) => res.send("👌"));

// app.post("/image-upload", (req, res) => {
//   const values = Object.values(req.files);
//   const promises = values.map((image) =>
//     cloudinary.uploader.upload(image.path)
//   );

//   Promise.all(promises)
//     .then((results) => res.json(results))
//     .catch((err) => res.status(400).json(err));
// });

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

app.use(formData.parse());
