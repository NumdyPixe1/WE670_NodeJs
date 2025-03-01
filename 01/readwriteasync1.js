//Lab#3a Read File Asynchronous
console.log('---Lab#3a---');
const fs = require('fs');
fs.readFile('./txt/start.txt/','utf-8',(err,data)=>{
    console.log(data);
});
console.log('Will read file!');//ระหว่างอ่านไฟล์ start.txt จะทำงานบรรทัดนี้ก่อน
