/*
    - สร้าง func ชื่อ getStudent มี parament ชื่อ id
    - สร้าง object promise ใน getStudent โดยให้ promise สามารถ return ได้ เพื่อจะสามารถนำค่า promise ไปแสดงค่าต่อได้
*/
const getStudent = (id) => {
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let name = "Suchada";
        if(name){//ถ้า name มีการกำหนดค่า
            resolve({id: id, name: name})//แสดงข้อมูล id และ name
        }else{
            reject(new Error('Cannot get the result'));
        }
    },2000);
});
}

getStudent(1).then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
})












