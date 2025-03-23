/*
Event Emitter
 - ตรวจสอบเมื่อ user ได้ทำอะไรสักอย่างบนระบบ เช่น การสมัครสมาชิก
 - มี 2 method ได้แก่
 - on = ดักรอ event แล้วค่อยเรียก (Listener)
 - emit = สั่งให้เกิด event 
*/

//Event Emitter สำหรับการลงทะเบียนสมาชิกใหม่
console.log("---LAB#9---Event Emitter---")
const EventEmitter = require('events')//เรียกใช้ Module Event
const myService = new EventEmitter();//เก็บค่า Object ไว้ใน myService

setImmediate(()=>{//emit สำหรับการลงทะเบียนสมาชิกใหม่
    myService.emit('registration',{//ชื่อ event คือ registration
        name: "Suchada",email: "suchada@email.com" //ส่งผ่านค่า name, email
    })
    });
    /*ดักรอว่ามี event ที่ชื่อ registration ไหม 
    ถ้ามีให้ส่งออกผ่านค่า paramenter ชื่อ userData ที่เก็บค่า name, email ที่ได้มาจาก emit */
    myService.on('registration', (userData) => {
    console.log(`Email sent to ${userData.name} address: ${userData.email}`);
    });
    myService.on('registration', (userData)=>{
    console.log(`New member: ${userData.name}$`);
});