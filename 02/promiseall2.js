/*
Promises all has error
 - ถ้าเกิดตัวใดตัวหนึ่งทำผิดพลาด จะไม่แสดง array
*/
console.log('---LAB#6b---Promise all has error');
const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('First');
    resolve(1);
    },3000);
});

const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('Second');
    //resolve(2);
    reject(new Error('Error in Second Promise'));
    },2000);
});

//คำสั่ง Promise.all จะไม่แสดงผลลัพธ์ เพราะตัวใดตัวหนึ่งทำผิดพลาด
Promise.all([myPromise1,myPromise2])
    .then((results)=>{
    console.log(results);
})
    .catch((error)=>{
    console.log(error.message);
});