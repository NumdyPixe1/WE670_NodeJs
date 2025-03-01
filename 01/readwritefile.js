/* 
Synchronous (Blocking code)
 - ทำงานเป็นลำดับ
 - เมื่อเจอไฟล์ที่ต้องอ่านจะทำการอ่านจนกว่าจะเสร็จ บรรทัดอื่น ๆ ถึงจะทำงานต่อ
 - เปรียบเสมือนการต่อคิวเพื่อสั่งอาหาร
Asynchronous (Non-Blocking code)
 - ทำงานพร้อมกัน
 - เมื่อเจอไฟล์ที่ต้องอ่านจะทำการอ่านไฟล์และ บรรทัดอื่น ๆ สามารถทำงานไปพร้อมกันได้
 - เปรียบเสมือนการเขียนสั่งอาหารให้แม่ค้า แล้วไปทำอย่างอื่นโดยไม่ต้องต่อคิวรอสั่ง
Call back
 - การเรียก task นั้นกลับมาใช้งาน
 - Call back เป็น parameter ตัวสุดท้ายของ function
 - เปรียบเสมือนการที่แม่ค้าโทรตามลูกค้า หลังทำอาหารเสร็จแล้ว
 */

const fs = require('fs');//เรียกใช้ Module File system

//Lab#1 ใช้ fs อ่านไฟล์
console.log('---Lab#1---');
const textIn =  fs.readFileSync('./txt/input.txt','utf-8');//อ่านไฟล์ input.txt
console.log(textIn);

console.log('---Lab#2---');
//Lab#2 ใช้ fs เขียนไฟล์
const textOut = `Avocado information: ${textIn}\n Create on ${Date.now()}`;//นำ textIn มาใส่ใน textOut
fs.writeFileSync('./txt/output.txt',textOut);//นำข้อมูล textOut มาใส่ในไฟล์ output.txt
console.log('File written');

console.log("---Synchronous---");
const readSync = fs.readFileSync('./txt/input.txt','utf-8');
console.log("This is Synchronous: "+ readSync);

console.log("---Asynchronous---");
fs.readFile('./txt/input.txt','utf-8',(err,data)=>{ //อ่านเสร็จแล้วจะเก็บค่าลงใน callback function โดยใน callback จะมี parameter ชื่อ err และ data 
    console.log("This is Asynchronous: "+ data);
});
 