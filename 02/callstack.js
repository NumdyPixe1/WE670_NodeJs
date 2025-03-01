/*
Call Stack
 - ลำดับการทำงานของ event
 - event ที่ทำงานลำดับสุดท้าย จะออกจากการทำงานเป็นลำดับแรก
 */

//LAB#1a Call Stack with Arrow function
console.log('---Lab#1a Call Stack without Arrow function---');
function multiply(a,b){
    return a * b;
}
function square(n){
    return multiply(n,n);  
}
function printSquare(n){
    var squared = square(n);
    console.log(squared);
}
printSquare(4);

//LAB#1b Call Stack with Arrow function
console.log('---Lab#1b Call Stack with Arrow function---');
var multiply =(a,b)=> {return a * b}//คูณ
var square =(n)=> {return multiply(n,n)}//ยกกำลัง เรียกใช้ func คูณ
var printSquare =(n)=> {
    var squared = square(n); //square ทำการคืนค่ามาใส่ตัวแปร squared
    console.log(squared);
}
printSquare(4);

/*
11. - mian()

10. - 16
    - main()

9.  - console.log(squared);
    - printSquare(4)
    - mian()

8.  - var squared = square(16)
    - printSquare(4)
    - mian()

7.  - square(4) = return(16)
    - printSquare(4)
    - mian()

6.  - return(16)
    - printSquare(4)
    - mian()

5.  - return(16)
    - square(4)
    - printSquare(4)
    - mian()                             
 
4.  - multiply(4,4)
    - square(4)
    - printSquare(4)
    - mian()
                                
 3. - square(4)
    - printSquare(4)
    - mian()
                              
 2. - printSquare(4)
    - main()
                                 
 1. - main()                                             
*/
