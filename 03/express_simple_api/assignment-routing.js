const http = require('http');
const url = require('url');
// create server
// const server = http.createServer((req, res) =>{
// implement routing
// const pathName = req.url;
// if(pathName === '/overview'){
// res.end('This is the OVERVIEW');
// } else if (pathName === '/product'){
// res.end('This is the PRODUCT');
// });
// server.listen(3000,

// '127.0.0.1',()=>{

// console.log('Listening to request on port 3000');
// });

/*
        ทั้ง 2 แสดงผลลัพธ์แบบเหมือนกัน
*/

//create application object
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
//call method object express
app.get('/',(req,res)=>{
res.send('Hello from Server');
});
app.get('/overview',(req,res)=>{
res.send('This is the OVERVIEW');
});
app.get('/product',(req,res)=>{
res.send('This is the PRODUCT');
});

//test
app.listen(port,'127.0.0.1',()=>{
console.log(`Listen to request on port ${port}`);
});