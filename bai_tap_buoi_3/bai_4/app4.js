// Bài 4:

// a. Tạo một mảng và log ra màn hình
let arr = [5,7,300,90,27,9,10];
console.log('Mảng kích thước của mỗi con cừu:');
console.log(arr);

// b. chọn ra con có kích thước lớn nhất
let max = Math.max(...arr)
console.log('Con cừu có kích thước lớn nhất là: ' + max);

// c. Thay đổi kích thước vừa tìm được thành 8
arr[arr.indexOf(max)] = 8;
console.log('mảng sau khi thay đổi là:' + arr);

// d. Mỗi con cừu tăng lên 50 
for(let i in arr)
{
    arr[i] += 50;
}
console.log('mảng sau khi tăng 50 : ' + arr);

// e. tăng trong vài tháng tuỳ thích
for(let i in arr)
{
    arr[i] += 50;
}
console.log('mảng sau khi tăng 50 lần 2 : ' + arr);
for(let i in arr)
{
    arr[i] += 50;
}
console.log('mảng sau khi tăng 50 lần 3 : ' + arr);

// f. tính số tiền bán cừu:
let sum = 0;
for(let i in arr)
{
    sum += arr[i];
}
console.log('Tổng số cân nặng của đàn cừu là: ' + sum);
console.log('Số tiền nhận được là:' +sum + ' * ' + '2$ = ' + sum*2);



