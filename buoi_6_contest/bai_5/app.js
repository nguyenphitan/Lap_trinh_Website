// bai 5:

let date = prompt('Enter date: (dd/mm/yy)').split('/');
console.log(date);
for( let i = 0 ; i < date.length ; i++)
{
    date[i] = Number(date[i]);
}
function check(i)
{
    if( i % 4 == 0 && i % 100 != 0 )    return true;
    return false;
}
if( date[2] > 0 )
{
    if( date[1] > 0 && date[1] < 13 )
    {
        switch(date[1])
        {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if( date[0] > 0 && date[0] < 32 )
                {
                    let next_day = date[0] + 1;
                    if( date[1] == 12 && date[0] == 31 )
                    {
                        date[2]++;
                        date[1] = 1;
                        date[0] = 1;
                    }
                    else
                    {
                        if( next_day > 31 )
                        {
                            date[1]++;
                            date[0] = 1;
                        }
                        else
                        {
                            date[0]++;
                        }
                    }
                }
                else console.log('error');
                break;
            case 2:
                if( check(date[2]) )
                {
                    if( date[0] > 0 && date[0] < 30 )
                    {
                        let next_day = date[0] + 1;
                        if( next_day > 29 )
                        {
                            date[1]++;
                            date[0] = 1;
                        }
                        else
                        {
                            date[0]++;
                        }
                    }
                    else console.log('error');
                }
                else
                {
                    if( date[0] > 0 && date[0] < 29 )
                    {
                        let next_day = date[0] + 1;
                        if( next_day > 28 )
                        {
                            date[1]++;
                            date[0] = 1;
                        }
                        else
                        {
                            date[0]++;
                        }
                    }
                    else console.log('error');
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if( date[0] > 0 && date[0] < 31 )
                {
                    let next_day = date[0] + 1;
                    if( next_day > 30 )
                    {
                        date[1]++;
                        date[0] = 1;
                    }
                    else
                    {
                        date[0]++;
                    }
                }
                else console.log('error');
        }
    }
    else console.log('error');
}
else console.log('error');
console.log(date[0] + '/' + date[1] + '/' + date[2]);