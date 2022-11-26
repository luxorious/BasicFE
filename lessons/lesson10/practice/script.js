// let sel = document.querySelectorAll("p");
// let i = 0;
//     for (let elem of sel){
//         elem.innerText = 'hi';
//         i++
//     }
// for (let j = 0; j < sel.length; j++){
//     document.querySelectorAll("p")[j].innerText = "HELLO"
//     // sel[j].innerText = 'hello';
// }

// let main = document.querySelector('#main').innerText = "Я главный элемент";

let url = 'https://cutt.ly/TM5OTmX';

let images = document.querySelectorAll('.main > img');

console.log(images);

for (let g = 0; g < 5; g++){
    document.querySelectorAll("img")[g].setAttribute('src', url);
}

let x = 0;

for(let image of images){
    if (x == -7){
        break;
    }
    else{
        image.setAttribute('src', url)
        x--
    }
}