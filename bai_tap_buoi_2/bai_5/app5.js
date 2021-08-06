// bài 5: nhập vào 1 số và tính giá trị biểu thức: (1 * 2 * 3 * ... * n)
let n = Number(prompt('Nhập vào một số bất kì:'));
let i = 2;
let giaiThua = 1;
while( i <= n )
{
    giaiThua *= i;
    i++;
}
alert('Giai thừa của ' + n + ' là ' + giaiThua);