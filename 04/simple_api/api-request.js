/*
API
 - HTTP Request
    - GET = เรียกดูข้อมูล
    - POST = เพิ่มข้อมูลใหม่ 
    - PUT = อัปเดตข้อมูลที่มีอยู่แล้ว
    - DELETE = ลบข้อมูล
*/
// Lab#1 
console.log("---Lab#1---Esport");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
const esMember = [
  { id: 21, 'fname': "พัชรพล", 'lname': "จันทร์นวล", 'tel': "0812345678" },
  { id: 33, 'fname': "แทนรัก", 'lname': "มงคลกาล", 'tel': "0698745630" },
  { id: 42, 'fname': "ชาลิสา", 'lname': "ดนตรีเทพ", 'tel': "0987412365" },
  { id: 45, 'fname': "วิชาญ", 'lname': "อรรถทรัพย์", 'tel': "0875321594" },
  { id: 47, 'fname': "วิรัตน์", 'lname': "รุ่งเรือง", 'tel': "0785214569" },
];

// สร้างเซิฟ 127.0.0.1:8000
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
})

// Lab#1a *Get* เรียกดูข้อมูลทั้งหมด 127.0.0.1:8000/api/getmember
app.get('/api/getmember',(req,res)=>{
    //ส่งข้อมูลของ esMember ไปที่ res
    res.send(esMember);
}); 

// Lab#1b *Query String* เรียกดูข้อมูลที่ค้นหาโดยการใช้ query 127.0.0.1:8000/api/querymember?id=21
app.get('/api/querymember',(req,res)=>{
    const myQueryString = req.query;
    //ถ้า myQueryString มีความยาวไม่น้อยกว่า 0
    if(Object.keys(myQueryString).length!= 0){
        /*  สร้างตัวแปร memId เพื่อเก็บค่า id ที่ค้นหา
            แปลงค่าใน myQueryString ให้เป็น int 
        */
        const memId = esMember.find(element => element.id == parseInt(myQueryString.id));
        //ถ้ามีการสร้างตัวแปร 
        if(memId){
            res.send(memId);
        }else{
            res.status(404).send('ไม่พบข้อมูลของสมาชิกรหัสนี้');
        }
    }else{
        //127.0.0.1:8000/api/querymember
        res.status(404).send('ไม่พบหน้า API ที่เรียก');
    }
});

// Lab#1c *GET by add ID* เรียกดูข้อมูลที่ค้นหาโดยการระบุค่า id  
// 127.0.0.1:8000/api/getmember/21
app.get('/api/getmemid/:id',(req,res)=>{
    //ใช้แค่ method find                                    //แปลง string เป็น int
    const memId = esMember.find(element => element.id === parseInt(req.params.id));
    if(memId){
        res.send(memId);
    }
    else{
        //http://localhost:8000/api/getmemid/0
        res.status(404).send('ไม่พบรหัสสมาชิกนี้');
    }
});

// Lab#1d *POST* เพิ่มข้อมูล
app.post('/api/addmember',(req,res)=>{
    const memId = req.body.id;
    const memFname = req.body.fname;
    const memLname = req.body.lname;
    const memTel = req.body.tel;
/*  - เลือกเป็น body
        - เลือกชนิดเป็น raw:JSON
        - ใส่ข้อมูลในรูปแบบ JSON
    {
        "id": 48,
        "fname": "อมร",
        "lname": "เจริญรุ่ง",
        "tel": "0891234567"
    },
*/
    const newMember = {id: memId, 'fname': memFname, 'lname': memLname, 'tel': memTel};
    esMember.push(newMember);
    res.send(esMember);
});

// Lab#1c เพิ่มข้อมูลตั้งแต่ 2 ขึ้นไป 
// http://localhost:8000/api/addmembers
app.post('/api/addmembers',(req,res)=>{
    const memArr = req.body;
/*
    เหมือนกับ POST แต่เพิ่มเติม คือ เพิ่ม array ครอบ object Ex.[{} , {}]
    [
    {
        "id": 49,
        "fname": "ศรราม",      
        "lname": "พิทักษ์ราช",
        "tel": "0745871259"
    },
    { 
        "id": 50,
        "fname": "เดชา",
        "lname": "งามพร้อม",
        "tel": "0845796321"
    }
    ]
*/
    memArr.forEach(element => {
        const memId = element.id;
        const memFname = element.fname;
        const memLname = element.lname;
        const memTel = element.tel;

        const newMember = {id: memId, 'fname': memFname, 'lname': memLname, 'tel': memTel};
        esMember.push(newMember);
    });
    res.send(esMember);
})

//Lab#1f *PUT* แก้ไขข้อมูล โดยรับรหัสข้อมูลมาแก้ไข
// http://localhost:8000/api/editmem/33
app.put('/api/editmem/:id',(req,res)=>{
    const memId = esMember.find(element => element.id === parseInt(req.body.id)) 
    if(memId){
/*       
    {
        "id": 33,
        "fname": "แทนรัก",
        "lname": "มงคลกาล",
        "tel": "0814567890"
    }
*/
        memId.fname = req.body.fname;
        memId.lname = req.body.lname;
        memId.tel = req.body.tel;

    }
    else{
        res.status(404).send('ไม่พบรหัสสมาชิกนี้');
        }
res.send(esMember);
});

//Lab#1g *DELETE* ลบข้อมูล โดยรับรหัสข้อมูล
// http://localhost:8000/api/deletemem/33
app.delete('/api/deletemem/:id',(req,res)=>{
    const memId = esMember.find(element => element.id === parseInt(req.params.id))
    if(memId){
        const index = esMember.indexOf(memId);
        //คำสั่งลบ id ที่กำหนด
        esMember.splice(index,1);
    }else{
    res.status(404).send('ไม่พบรหัสสมาชิกนี้');
    }
    res.send(esMember);
});


