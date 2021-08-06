/*  bài 4: viết 1 chương trình in ra:
    a. 7 số, bắt đầu từ 0
    b. n số, bắt đầu từ 0
    c. các số liên tiếp trong đoạn [3;n)
    d. các số từ [c;n)
    e. các số bắt đầu từ c, nhỏ hơn n, bước nhảy là 3
    f. bắt đầu từ c, nhỏ hơn n, bước nhảy là s
*/

// a. 7 số, bắt đầu từ 0
// let i = 0;
// while( i < 7 )
// {
//     console.log(i);
//     i++;
// }


// b. n số, bắt đầu từ 0
// let n = Number(prompt('Nhập vào số n:'));
// let i = 0;
// while( i < n )
// {
//     console.log(i);
//     i++;
// }


// c. các số liên tiếp trong đoạn [3;n)
// let n = Number(prompt('Nhập vào số n:'));
// let i = 3;
// while( i < n )
// {
//     console.log(i);
//     i++;
// }


// d. các số từ [c;n)
// let c = Number(prompt('Nhập vào số c:'));
// let n = Number(prompt('Nhập vào số n:'));
// console.log('Các số trong đoạn [c;n) là:');
// while( c < n )
// {
//     console.log(c);
//     c++;
// }


// e. các số bắt đầu từ c, nhỏ hơn n, bước nhảy là 3
// let c = Number(prompt('Nhập vào số c:'));
// let n = Number(prompt('Nhập vào số n:'));
// console.log('Các số bắt đầu từ c, nhỏ hơn n, bước nhảy là 3:');
// while( c < n )
// {
//     console.log(c);
//     c += 3;
// }


// f. bắt đầu từ c, nhỏ hơn n, bước nhảy là s
let c = Number(prompt('Nhập vào số c:'));
let n = Number(prompt('Nhập vào số n:'));
let step = Number(prompt('Nhập vào bước nhảy:'));
while( c < n )
{
    console.log(c);
    c += step;
}