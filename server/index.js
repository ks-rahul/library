const http = require("http");
const socket = require("socket.io");

const app = require("./src/app");

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port);

// const io = socket(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//   global.chatSocket = socket;
// });
