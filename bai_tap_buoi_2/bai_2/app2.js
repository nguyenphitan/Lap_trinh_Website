// bài 2: tính giai thừa của số nhập vào
let soNhapVao = Number(prompt('Nhập vào số bất kì:'));
let i = 2;
let giaiThua = 1;
while( i <= soNhapVao )
{
    giaiThua *= i;
    i++;
}
alert(soNhapVao + '! = ' + giaiThua);