import http from "http";
import fs from "fs";
const PORT = 5000;
console.log("Start");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  try {
    fs.writeFileSync("test.txt", "Hello Piyush Razzputt! in Sync");
    console.log("File Written");
    res.end("File written successfully");
  } catch (error) {
    console.log(error);
    res.end("Error writing file");
  }
});
server.listen(PORT, () => {
  console.log(`Server running on PORT No. ${PORT}`);
});
console.log('End');
