// bài 1: nhập vào một mảng số thực và tính tổng

let str = prompt('Nhập mảng số thực:')
let arr = str.split(',')
let sum = 0
for(let i=0 ; i<arr.length ; i++)
{
    sum += Number(arr[i]);
}
alert('Tổng các phần tử trong mảng = ' + sum)


