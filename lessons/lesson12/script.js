// let button = document.querySelector(".click");

// button.addEventListener('click', function(){alert('Hello World', )})

// button.addEventListener('click', my_funk);
// button.addEventListener('click', my_funk2);
// button.addEventListener('mouseover', my_funk);

// function my_funk(){
//     alert('Hello Worldddd');
// }

// function my_funk2(){
//     alert('@@@@@@2@@@@@')
// }

// button.removeEventListener('click',funk);

// button.addEventListener('click', funk);
// function funk(){
//     console.log('Hello JS');
// }
// let paragraph = Number(document.querySelector('p').innerText);

// function change(){
//     document.querySelector('p').innerText = ++paragraph

// }

// button.addEventListener('click', change);


// let button1 = document.createElement('button');
// button1.innerText = 'Plus';
// button1.classList.add('plus');

// let button2 = document.createElement('button');
// button2.innerText = 'Minus';
// button2.classList.add('minus');

// document.body.append(button1, button2);
// let num = 10

// function plus(){
//     console.log(++num)
// }
// function minus(){
//     console.log(--num)
// }

// button1.addEventListener('click', plus);
// button2.addEventListener('click', minus);

// let button = document.querySelector(".click");

// button.style.backgroundColor = 'black'
// button.style.color = 'white';
// button.style.width = '100px';
// button.style.height = '60px';

// button.style.height = '';


let div = document.createElement('div');
div.classList.add('div1');
document.body.append(div);

let frame = document.querySelector('.div1');

frame.style.border = '1px solid black';
frame.style.width = "100px";
frame.style.height = '100px';

let button = document.querySelector(".div1");

let list_of_colors = ['blue', 'green', 'yelow', 'red']
function chahge_color(){
    while (true){
        let color = prompt('Input color!')
        for (let i in list_of_colors){
            if (color == list_of_colors[i]){
                frame.style.backgroundColor = color;
                //break; - виходит из цикла фор, как вийти из двух циклов? for and while
                return; // c return работает нормально так как я и планировал
            }
            else if (color == '') {
                return;
            }
        }
        alert('wrong color')
    }
}

button.addEventListener('click', chahge_color)