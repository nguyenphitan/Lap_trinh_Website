// bài 7: Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
while(1)
{
    let x = Number(prompt('Nhập vào số x:'));
    if( x >= 0 && x <= 9 )
    {
        if( x > 4.5 )   alert('Higher half of 9');
        else if( x == 4.5 ) alert('Middle');
        else    alert('Lower half of 9');
        break;
    }
    else alert('Nhập lại đê!');
}