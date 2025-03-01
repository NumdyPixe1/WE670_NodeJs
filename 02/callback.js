/*
Call back
 - การเรียก task นั้นกลับมาใช้งาน
 - call back เป็น parameter ตัวสุดท้ายของ function
 - เปรียบเสมือนการที่พนักงานโทรตามลูกค้า หลังทำอาหารเสร็จแล้ว
 - () => {}
*/

//Lab#4 Call back
console.log('---Lab#4---Call back---');

const myRequest = (data, callback) =>{//callback นี้เป็น func ชื่อ myCallback
    const response = 10 + data;//เก็บค่าคือ 15
    const error = undefined;//เก็บค่าถ้า error
    const result = callback(error,response);
    return result;
} 
//ตรวจสอบถ้ามีการ error
const myCallback = (error,res)=>{
    if(error)//ถ้ามี error
        return 'You have got error';
    else//ถ้าไม่มี
        return res;//ส่งค่า res กลับ
}

const result = myRequest(5,myCallback);
console.log(result);
//result = 15

/*
หรือ การ call back อีกแบบโดยรวม myCallback เข้ากับ result
const myRequest = (data, callback) =>{
    const response = 10 + data;
    const error = undefined;
    const result = callback(error,response);
    return result;
} 

const result = myRequest(5,(error,res)=>{
    if(error)
        return 'You have got error';
    else
        return res;
)};
console.log(result);
*/

