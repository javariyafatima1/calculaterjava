function myFunction(){
let a = Number( prompt("Enter 1st number"));
let b = Number(prompt("Enter 2nd number"));
let c = (a+b);
console.log("a + b =", c)
document.getElementById("heading").innerHTML = c
}

function sub(){
    let a = prompt("Enter 1st number");
    let b =prompt("Enter 2st number");
    let c = (a-b);
    console.log("a - b =", c)
    document.getElementById("heading1").innerHTML = c
 }
 function multiply(){
    let a = prompt("Enter  1st number ");
    let b =prompt("Enter 2st number");
    let c = (a*b);
    console.log("a * b =", c)
    document.getElementById("heading2").innerHTML = c
 }
 function divide(){
    let a = prompt("Enter a value");
    let b =prompt("Enter a value");
    let c = (a/b);
    console.log("a / b =", c)
    document.getElementById("heading3").innerHTML = c
 }