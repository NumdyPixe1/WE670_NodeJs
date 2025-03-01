//Route parameters
console.log("---Lab Route parameters---");
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

/*
    - สร้างฐานข้อมูล ได้แก่ FN students และ MK students
*/
// FN students 
const fnStudents = [
{id:24, name:'Suchada'},
{id:32, name:'Narawit'}
];
// MK students
const mkStudents = [
{id:49, name:'Chonticha'},
{id:57, name:'Kiattiphom'}
];
// major สาขาทั้งหมด
const allMajors = {
'fn': fnStudents,
'mk': mkStudents
};

// route1
app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
if (major=='fn'){// http://127.0.0.1:8000/api/fn
    const jsonString = JSON.stringify(fnStudents);
    req.myobj = jsonString;
    next();
}else if(major == 'mk'){// http://127.0.0.1:8000/api/mk
    const jsonString = JSON.stringify(mkStudents);
    req.myobj = jsonString;
    next();
}else{
    res.send('Major not found!!!');
}
    },(req,res)=>{
    req.myobj += ' End of Data';
    res.send(req.myobj);
});

app.listen(port,'127.0.0.1',()=>{  
    console.log(`Listening to request on port ${port}`);
});