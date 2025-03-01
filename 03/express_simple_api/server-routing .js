const http = require('http');
const url = require('url');
// create server
const server = http.createServer((req, res) =>{
// implement routing

const pathName = req.url;
if(pathName === '/overview'){//http://127.0.0.1:8000/overview
    res.end('This is the OVERVIEW');//เจอ path
}else if (pathName === '/product'){//http://127.0.0.1:8000/product
    res.end('This is the PRODUCT');
}else{
    res.writeHead(404);//ไม่เจอ
    res.end('Page not found!!');
}
});

server.listen(8000,'127.0.0.1',()=>{
console.log('Listening to request on port 8000');

});