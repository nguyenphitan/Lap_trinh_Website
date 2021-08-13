// bài 2: nhập vào mảng số thực, tìm số nhỏ nhất

let str = prompt('Nhập mảng số thực:')
let arr = str.split(',')
let min = Number(arr[0])
for(let i=1 ; i<arr.length ; i++)
{
    if( Number(arr[i]) < min )  min = Number(arr[i])
}
alert('Số nhỏ nhất trong mảng là số : ' + min)