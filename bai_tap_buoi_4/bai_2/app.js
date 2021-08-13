// Bài 2:
/*
Write a script to store and process the learning tasks
to become a front-end developer
*/

let course = [
    {
        id: 1,
        name: 'HTML',
        complete: false
    },
    {
        id: 2,
        name: 'CSS',
        complete: false
    },
    {
        id: 3,
        name: 'Javascript',
        complete: false
    },
    {
        id:4,
        name: 'Node Package Manager',
        complete: false
    },
    {
        id: 5,
        name: 'Git',
        complete: false
    },
];


// 1. in ra
// for(let i of course)
// {
//     console.log(i);
// }


// 2. cho người dùng nhập vào các yêu cầu (New, Delete, Update, Complete)
let command = prompt('Nhập vào yêu cầu: (New, Delete, Update, Complete)');
if( command === 'New' )
{
    let nameCourse = prompt('Nhập vào khoá học mới: ');
    let  newCourse = {
        id: course.length + 1,
        name: nameCourse,
        complete: false
    };
    course.push(newCourse);
    for(let i of course)
    {
        console.log(i);
    }
}
else if( command === 'Update' )
{
    let id = Number(prompt('Nhập id vị trí bạn muốn upadte:'));
    for(let i of course)
    {
        if( i.id === id )
        {
            let nameUpdate = prompt('Nhập vào tên bạn muốn đặt:');
            i.name = nameUpdate;
        }
    }
    for(let i of course)
    {
        console.log(i);
    }
}
else if( command === 'Complete' )
{
    let id = Number(prompt('Nhập vào id vị trí khoá học đã hoàn thành:'));
    for(let i of course)
    {
        if( i.id === id )
        {
            i.complete = true;
        }
    }
    for(let i of course)
    {
        console.log(i);
    }
}
else if( command === 'Delete' )
{
    let id = Number(prompt('Nhập vào id vị trí bạn muốn xoá :'));
    if( course.indexOf(id) )
    {
        course.splice(id-1,1);
    }
    for(let i of course)
    {
        console.log(i);
    }
}