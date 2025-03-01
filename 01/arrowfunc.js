/*
การใช้ Arrow function
 - เป็นการสร้าง function แบบสั้นและรวดเร็ว
var _name = ( _parameter ) => { }
*/

//Lab Arrow function

//Function
function multiply(a,b){
    return a * b;
}
function square(n){
    return multiply(n,n);
}
function printSquare(n){
    var squared = square(n);
    console.log("Function: "+squared);
}
printSquare(10);

//Arrow
var multiplyArrow=(a,b)=> a*b;

var squareArrow=(n)=>multiplyArrow(n,n);

var printSquareArrow=(n)=>{
    var squared = squareArrow(n);
    console.log("Arrow: "+squared);
};
printSquareArrow(10);
