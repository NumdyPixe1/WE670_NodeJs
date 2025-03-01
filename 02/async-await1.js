/*
Async/Await
 - การใช้ให้ func ทำงานเป็นลำดับไม่ข้ามไปข้ามมา
 - async
    - ใช้คำสั่งที่ด้านหน้าของ func
    - เพื่อบอกว่า func นี้ ใช้การทำงานแบบ async
    - async function main(){} หรือ const main = async () => {}
 - await
    - ใช้ภายใน func ที่ใช้ async
    - รอผลลัพธ์ให้ทำงานให้เสร็จ ถึงจะไปใช้งาน
    - async function main(){ await task1() }
 - เนื่องจากไม่สามารถรู้ได้ว่าการทำงานแบบ async จะสามารถทำงานสำเร็จได้หรือไม่
 - เลยต้องใช้ try/catch เพื่อตรวจสอบการ error
*/
//LAB#8a Async/Await
console.log('---LAB#8a---Async/Await---');
const myAsyncFunc = async ()=>{
   const result = await Promise.resolve("Async function");
   console.log(result);
}
myAsyncFunc();

