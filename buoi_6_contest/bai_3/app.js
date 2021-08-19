// bài 3:

let arr = prompt('Enter array:').split(',');
console.log(arr);
function check(arr_, x)
{
    for(let i=0 ; i<arr_.length ; i++)
    {
        if( x === arr_[i] ) return false;
    }
    return true;
}
let arr_result = [];
let iter = 0;
arr_result[iter++] = arr[0];
for(let i = 1 ; i < arr.length ; i++)
{
    if( check(arr_result , arr[i]) )
    {
        arr_result[iter++] = arr[i];
    }
}
console.log(arr_result);