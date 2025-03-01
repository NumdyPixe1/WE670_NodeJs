/*
 - ถ้าเกิด await ไม่สำเร็จจะเกิดการค้าง
 - ตรวจสอบการ error
 - try
 - catch
 - try/catch มีลักษณะเหมือน if/else
 - try {  func  }
   catch (error) {error.message}
*/
//LAB#8b try/catch
console.log('---LAB#8b---try/catch---');
const myAsyncFunc = async() => {
    try{const result = await Promise.resolve("Async function");
        console.log(result);}
    catch (error){
        console.log(error.message)
    }  
}
myAsyncFunc();
