/*
Promise Race
 - หาว่า promises ตัวไหนเสร็จเร็ว
 - Promise.race ([myPromise1, myPromise2])
*/
console.log('---LAB#7---Promise Race');
const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('First');//3
    resolve(1);
    reject(new Error('Error in First Promise'));
    },3000);
});
const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('Second');//1
    resolve(2);//2
    reject(new Error('Error in Second Promise'));
    },2000);
});

Promise.race([myPromise1, myPromise2])
    .then((results)=>{
    console.log(results);
})
    .catch((error)=>{
    console.log(error.message);
});
