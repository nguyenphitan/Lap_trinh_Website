// Bai 1:
let btn1 = document.querySelector('.btn1');
let box1 = document.querySelector('.box1');
let count = 0;
btn1.onclick = () => {
    if( count == 0 ) {
        box1.style.display = 'none';
        count++;
    }
    else {
        box1.style.display = 'block';
        count--;
    }
}


// Bai 2:
let btn2 = document.querySelector('.btn2');
let box2 = document.querySelector('.box2');
let str = '0123456789abcdef';
btn2.onclick = () => {
    let color = '#';
    for(let i = 0 ; i < 6 ; i++ ) {
        color += str[Math.floor(Math.random() * 16)];
    }
    box2.style.backgroundColor = color;
}


// Bai 3:
let btn3 = document.querySelector('.btn3');
let box3 = document.querySelector('.box3');
let box5 = document.querySelector('.box5');
btn3.onclick = () => {
    let inner = box3.innerHTML;
    box3.innerHTML = box5.innerHTML;
    box5.innerHTML = inner;
}


// Bai 4:
let btn4 = document.querySelector('.btn4');
let box4 = document.querySelector('.box4');
let i = 0;
btn4.onclick = () => {
    box4.style.fontSize = 'calc(16px + ' + i + 'px)';
    i++;
    if( i > 10 )
    {
        box4.style.fontSize = '16px';
        i-=10;
    }
}
