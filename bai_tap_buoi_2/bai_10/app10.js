/*
    bài 10: viết một chương trình in ra:
    a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
    b. n L’s and H’s in total, n entered by user
    c. 8 1’s and 0’s in total, consecutively
    d. n 1’s and 0’s in total, consecutively, n entered by user
*/

// a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// let chan = 0;
// let le = 0;
// let i = 1;
// while( i <= 6 )
// {
//     if( i % 2 == 0 ) chan++;
//     else le++;
// }
// console.log(le + ' L');
// console.log(chan + ' H');


// b. n L’s and H’s in total, n entered by user
// let n = Number(prompt('Nhập vào số n:'))
// let chan = 0;
// let le = 0;
// let i = 1;
// while( i <= n )
// {
//     if( i % 2 == 0 ) chan++;
//     else le++;
// }
// console.log(le + ' L');
// console.log(chan + ' H');


// c. 8 1’s and 0’s in total, consecutively
// let i = 0;
// while( i < 8 )
// {
//     console.log(0);
//     i++;
//     if( i < 8 )
//     {
//         console.log(1);
//         i++;
//     }
// }


// d. n 1’s and 0’s in total, consecutively, n entered by user
let n = Number(prompt('Nhập vào số n:'));
let i = 0;
while( i < n )
{
    console.log(0);
    i++;
    if( i < n )
    {
        console.log(1);
        i++;
    }
}