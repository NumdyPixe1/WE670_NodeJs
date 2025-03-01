const http = require('http')
//สร้าง server
const server = http.createServer((req,res)=>{
    res.end("Hello Server");

});

server.listen(8000, '127.0.0.1',()=>{
    console.log("Listening to request on port 8000")
});