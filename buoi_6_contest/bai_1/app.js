// bài 1:

let str_input = prompt('Enter your string:');
let str_reverse = '';
for(let i = str_input.length - 1 ; i >= 0 ; i--)
{
    str_reverse += str_input[i];
}
console.log(str_reverse);