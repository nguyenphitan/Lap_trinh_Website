// bai 4:

let arr_obj = [
    {
        id: 1,
        name: 'Nguyen Phi Tan',
        wage: 3000,
        position: 'Leader'
    },
    {
        id: 2,
        name: 'Nguyen Van A',
        wage: 1200,
        position: 'Fresher'
    },
    {
        id: 3,
        name: 'Ngo Quang Truong',
        wage: 2500,
        position: 'Junior'
    }
];

let command = prompt('Enter command: (Read, Create, Update, Delete)');
if( command === 'Read' )
{
    console.log(arr_obj);
}
else if( command === 'Create' )
{
    let name = prompt('Enter new name:');
    let wage = Number(prompt('Enter wage:'));
    let position = prompt('Enter position:');
    let new_obj = {
        id: arr_obj.length + 1,
        name: name,
        wage: wage,
        position: position
    };
    arr_obj.push(new_obj);
    console.log(arr_obj);
}
else if( command === 'Update' )
{
    let id = prompt('Enter position:');
    for(let i of arr_obj)
    {
        if( i.position === id )
        {
            let new_name = prompt('Enter new name:');
            i.name = new_name;
        }
    }
    console.log(arr_obj);
}
else if( command === 'Delete' )
{
    let id = prompt('Enter id:');
    for(let i of arr_obj)
    {
        if( i.id === id )
        {
            arr_obj.splice(id-1,1);
            break;
        }
    }
    console.log(arr_obj);
}