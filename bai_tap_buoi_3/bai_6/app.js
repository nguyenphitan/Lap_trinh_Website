// bài 6: mảng lẻ

let arrInput = prompt('Nhập mảng số nguyên:').split(',');
let arr = [];
for(let i in arrInput)
{
    if( Number(arrInput[i]) % 2 != 0 )  arr.push(Number(arrInput[i]))
}
console.log(arr);