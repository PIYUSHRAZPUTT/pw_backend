import http from 'http';
const PORT= 3000;

const server= http.createServer((req,res)=>{
    console.log(req.method, req.url);
    res.writeHead(200, {"content-type":"text/plain"});
    res.end('My first backend server');
});

server.listen(PORT, ()=>{
    console.log(`Server running on PORT No. ${PORT}`);
})