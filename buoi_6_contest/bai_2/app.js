// bài 2:

let str = prompt('Enter string:');
function check(kytu)
{
    return ( kytu >= 'a' && kytu <= 'z' );
}
let str_result = str[0].toUpperCase();
for(let i = 1 ; i < str.length ; i++)
{
    if( check(str[i]) && str[i-1] == ' ' )
    {
        str_result += str[i].toUpperCase();
    }
    else str_result += str[i];
}
console.log(str_result);