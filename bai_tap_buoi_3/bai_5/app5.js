// bài 5: nhập một mảng tên và in ra bởi cặp dấu <>
let strName = prompt('Nhập mảng tên:').split(',');
for(let i in strName)
{
    console.log('<' + strName[i] + '> ');
}