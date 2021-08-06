// bài 8: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n

let n = Number(prompt('Nhập vào số n:'));
let x = Number(prompt('Nhập vào số x:'));
if( x > n/2 )   alert('Higher');
else if( x == n/2 ) alert('Middle');
else alert('Lower');