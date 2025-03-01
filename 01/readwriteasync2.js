//Lab#3b Read File Asynchronous
console.log('---Lab#3b---');
const fs = require('fs');

fs.readFile('./txt/start.txt/','utf-8',(err,data1)=>{//1.
    fs.readFile(`./txt/${data1}.txt/`,'utf-8',(err,data2)=>{//2.
        console.log(data2);//The avocado 🥑 is also...
        fs.readFile('./txt/append.txt/','utf-8',(err,data3)=>{//3.
            console.log(data3);//APPENDIX: Generally, avocados 🥑 are...
        });
    });
});
console.log('Will read file!');

/*

 1. อ่านไฟล์ชื่อ start.txt แล้วเก็บไว้ใน data1 (ข้อความในไฟล์ คือ read-this)
 2. data1 เก็บค่าที่ชื่อ read-this ซึ่งตรงกับชื่อ read-this.txt ในโฟลเดอร์ txt แล้วทำการอ่านไฟล์ชื่อ read-this.txt แล้วเก็บลงใน data2
 3. อ่านไฟล์ชื่อ append.txt แล้วเก็บไว้ใน data3

*/
