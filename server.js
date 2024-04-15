//import http from "http";
const http = require('http');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

//0x51ed6D2Edd6A3927C3b046b651DD1e185bAC7ef6