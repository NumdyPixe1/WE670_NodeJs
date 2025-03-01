//Check authen student
const getAuthResult = async () => {
    try{
      const auth =  await checkAuth(1,12345);
      const data =  await getStudentData(auth);
      console.log(data);
    }
    catch(error){
        error.massage
    }
}

/*
ตรวจสอบสิทธิ์การเข้าถึงข้อมูล
 - 
*/
const checkAuth = (id,password) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let authData = 'xdfjsiu#fg@dc';
            if(authData){
                resolve({id: id, password: password, authData: authData});
                console.log('User Authenticated');
            }else{
                reject(new Error('Unauthenicated user'));
            }
        },1000);
    });
}

/*
ตรวจสอบข้อมูลนักเรียน
 - 
*/
const getStudentData = (auth) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = {name:'Suchada', permission:'member'};
            resolve(data);
            reject(new Error('Could not find student'));
        },2000);
    });
}

getAuthResult();





















/*const checkAuthen = (id,password) =>{
    return new Promise((resolve,reject)=>{
    setTimeout (()=>{
    const authData = 'xdfjsiu#fg@dc'; //ถ้า authData ตรงกับค่านี้ ให้ print
    console.log('User Authenticate');//สามารถเข้าฐานข้อมูลได้
    resolve({id:id, password: password, authData:authData});
    reject(new Error('Unauthenicated user'));//ไม่สามารถเข้าฐานข้อมูลได้
    },1000);//หน่วง 1 วิ
})}

const getStudentData = (auth) =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const data = {name:'Suchada',permission:'member'};
    resolve(data);
    //reject(new Error('Could not find student'));
    },2000);
});
}

const getAuthResult = async () =>{
    try{
        const auth = await checkAuth(15,'p@ssw0rd');
        const data = await getStudentData(auth);
        console.log(data);
    }catch(error){
        console.log(error.message);
    }
}
getAuthResult();
*/