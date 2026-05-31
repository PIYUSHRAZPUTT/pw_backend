import http from 'http';
import fs from 'fs';
const PORT= 3000;
console.log('Start');
const server= http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/plain"});
    fs.writeFile('demo.txt', "Hello Piyush Razzputt!", (err)=>{
    if(err){
        res.end("Error writing file");
        return;
    }
    console.log('File Written');
    res.end("File written successfully.....");
});
});
server.listen(PORT, ()=>{
    console.log(`Server running on PORT No. ${PORT}`);
})
console.log('End');
