//Express Routing
//create application object
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

//call method object express
app.get('/',(req,res)=>{// http://127.0.0.1:8000
res.send('Hello from Server');
});

app.get('/api/user',(req,res)=>{// http://127.0.0.1:8000/api/user
const userData = {id:15, name: 'Suchada'};
res.send(userData);//จะแสดงข้อมูลของ userData
});

//test
app.listen(port,'127.0.0.1',()=>{
console.log(`Listen to request on port ${port}`);
});