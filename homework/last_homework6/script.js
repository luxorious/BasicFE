// 1. Написать программу, которая формирует на основе массива строк множество параграфов ивыводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно. 

let p_lists = ['p1','p2', 'class', 'lorem'];
for(let i = 0; i < 100; i++){
    p_lists.push[i]
}

function create_paragraph(){
    for (let i = 0; i < p_lists.length; i++){
        let p_create = document.createElement('p');
        document.body.append(p_create)
        console.log('1')
        for (let j = i; j < i + 1; j++){
            let p_choise = document.querySelectorAll('p')
            console.log('2')
            p_choise[j].innerText = p_lists[j];
        }
    }
}

create_paragraph();
//коментар для себе 
// цикл проходить по всіх параграфафах і якщо мишкою натиснули на один із параграфів - то текст змінюється на заданий у функції імʼя функції задавати не потрібно
let click = document.querySelectorAll('p')
for (let i of click){
    console.log(click)
    i.addEventListener('click', function(){i.innerText = "*"})
}

// 2. Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];

function create_cards(){
    for (let i = 0; i < 10; i++){
        let div = document.createElement('div');
        document.body.append(div);
        for (let j = i; j < i + 1; j++){
            let block = document.querySelectorAll('div');
            let random = Math.floor(Math.random() * CSS_COLOR_NAMES.length);
            block[j].innerText = [j];
            block[j].style.backgroundColor = CSS_COLOR_NAMES[random];
            block[j].style.color = CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];
            block[j].style.fontSize = '25px'
            block[j].style.textAlign = 'center'
            block[j].style.display = "inline-block";
            block[j].style.margin = '10px';
            block[j].style.width = '100px'
            block[j].style.height = '100px'
        }
    }
}
create_cards()

let all_divs = document.querySelectorAll('div')
for (let i of all_divs){
    let background = window.getComputedStyle(i).backgroundColor;
    let color = window.getComputedStyle(i).color;
    i.addEventListener('click', function(){ // знаходить колір блоку і тексту
        i.classList.toggle('.active');
        i.style.backgroundColor = color; 
        i.style.color = background
    })
}

// 3. Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся. 

//changed  i.classList.add('.active'); -> i.classList.toggle('.active');

// 4. В js объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение в большем размере. 


// 5. Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно.  Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на карточку один параграф получает класс с display none а второй с display block. 


// 6. Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно. 


// 7. Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5. 
 