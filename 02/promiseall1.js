/*
Promises all
 - รอให้ promises ทุกตัวทำงานให้เสร็จถึงจะแสดงผลลัพธ์ในรูปแบบ array
 - ถ้า promise ตัวใดเกิดข้อผิดพลาดจะไม่แสดงผลลัพธ์
*/
console.log('---Lab#6a---Promise Concurrency---');
const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('First');
        resolve(1);//แสดงผลลัพธ์เป็นเลข 1
    },3000);

});

const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Second');//1
        resolve(2);
        reject(new Error('Error in Second Promise'));
    },2000);
});
// myPromise2 จะมาก่อน

Promise.all([myPromise1,myPromise2])
.then((results)=>{
    console.log(results);//3
    //results = [resolve ของ myPromise1, resolve ของ myPromise2 ]

});

