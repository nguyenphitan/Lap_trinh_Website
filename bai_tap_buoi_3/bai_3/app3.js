// bài 3: 
/*
Tạo một mảng chứa ít nhất 5 số, sau đó yêu cầu người dùng nhập một số,
thực hiện tìm kiếm để tìm số trong mảng, nếu số được tìm thấy,
hãy cho người dùng biết rằng với chỉ số của nó trong mảng,
nếu không, thì in ra không tìm thấy
*/

const arr = [1,2,3,4,5,6,7,8,9,10];
let value = Number(prompt('Nhập số bạn muốn tìm:'));
let check = 0;
for(let i=0 ; i<arr.length ; i++)
{
    if( arr[i] == value )
    {
        alert('Số bạn muốn tìm ở vị trí : ' + i);
        check = 1;
        break;
    }
}
if( !check )    alert('Không tìm thấy');
