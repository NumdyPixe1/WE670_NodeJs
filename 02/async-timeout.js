/*
Event Loop
 - การจัดการการทำงานแบบ asynchronous
 - ทำการวนลูปเพื่อตรวจสอบการทำงาน ของ call stack
 ถ้าพบว่าถ้ามี event พร้อมทำงานจะทำการหยิบมาใช้งานจนเสร็จ และกลับมาวนลูปใหม่
*/

//Lab#2 Event Loop with setTimeout
console.log('---Lab#2---Event Loop with setTimeout---');

//event loop เริ่มทำงาน
console.log('Begin');//1 event loop หยิบมาใช้งานได้ทันที 
setTimeout(()=>{//4 event loop ข้าม เพราะต้องรอ
    console.log('First');//เมื่อครบ 2 วินาที แล้ว event loop จะทำการวนลูปกลับมา และหยิบมาใช้งาน
},2000);

setTimeout(()=>{//3 event loop ข้าม เพราะต้องรอ 
    console.log('Second');//เมื่อครบ 1 วินาที แล้ว event loop จะทำการวนลูปกลับมา และหยิบมาใช้งาน
},1000);

console.log('End');//2 event loop หยิบมาใช้งานได้ทันที 

/*
1. Begin
2. End 
3. Second
4. First
*/