/*
Event Emitter
 - ตรวจสอบเมื่อ user ได้ทำอะไรสักอย่างบนระบบ เช่น การสมัครสมาชิก
 - มี 2 method ได้แก่
 - on = ดักรอ event แล้วค่อยเรียก
 - emit = สั่งให้เกิด event 
*/

console.log("---LAB#9---Event Emitter---")
const EventEmitter = require('events')//เรียกใช้ Module Event
const myService = new EventEmitter();//เก็บค่า Object ไว้ใน myService

setImmediate(()=>{
    myService.emit('registration',{
        name: "Suchada",email: "suchada@email.com"
    })
    });
    myService.on('registration', (userData) => {
    console.log(`Email sent to ${userData.name} address: ${userData.email}`);
    });
    myService.on('registration', (userData)=>{
    console.log(`New member: ${userData.name}$`);
});