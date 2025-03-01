/*
Promises
 - เป็น object
 - มี 2 method ได้แก่
    - promises all = รอให้ promises ทุกตัวทำงานให้เสร็จถึงจะแสดงผลลัพธ์ในรูปแบบ array
        Promise.all([myPromise1,myPromise2])
    - promises race = หาว่า promises ตัวไหนเสร็จเร็ว
        Promise.race ([myPromise1, myPromise2])
 - สถานะของการดำเนินงานของ task นั้น
 - วิธีใช้ทำการเอา promise มาครอบ async
 - มี 2 สถานะ ได้แก่ resolve(ทำสำเร็จ) และ reject(ไม่สำเร็จ)
 - เมื่อทำไม่สำเร็จ จะทำการนำข้อผิดพลาดไปใช้งาน
 - .then เก็บผลลัพธ์นำไปใช้งาน
 - .catch ตรวจสอบข้อผิดพลาด
 - new Promise( () => { การทำงานแบบ async } );
*/

//Lab#5 Promise
const p = new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log('---Lab#5---Promise---');
    resolve({id:1,'name':'Suchada'});//เก็บผลลัพธ์ ถ้าทำสำเร็จ
    reject(new Error('Error 404 Bad Request / ไม่มีข้อมูล'));//เก็บผลลัพธ์ ถ้าทำไม่สำเร็จ 
           //สร้าง Object ชื่อ Error
},2000);
});

//Lab#5 Asynchronous Operation : Promise
console.log('---Lab#5---Asynchronous Operation : Promise---');
console.log('Before Asynchronous Operation');
p.then((result)=>{//สำเร็จ
    console.log('This is result: ',result)
})
.catch((err)=>{//ไม่สำเร็จ
    console.log(err.message);
})
console.log('After Asynchronous Operation');


// const p = new Promise(function(resolve,reject){//สำเร็จ = resolve / ไม่สำเร็จ = reject
//     setTimeout(function(){
//         //resolve({id:1,'name':'Numdao'});
//         reject(new Error('Error 404 Bad Request / ไม่มีข้อมูล'));
//     },2000);//หน่วงเวลา
//     });
//     console.log('Before Asynchronous Operation');
    
//     p.then(function(result){
//         console.log('This is result: ',result)
//     })
//     .catch(function(err){
//         console.log(err.message);
//     })
//     console.log('After Asynchronous Operation');

 