let g = '';

for (var i = 0; i < 7; i++) {
    console.log(g+="#");
}

for(let i = 1; i < 101; i++){
    if (i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }
    else if(i%5==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}


let chess = '';

for(let i = 1; i < 65; i++){
    if (i%2 == 0){
        chess += "#";
        //console.log("\r#");
    } else{
        chess += " ";
    }
    if (i%8 == 0){
        chess +="\n";
        //console.log("\n");
    }
}

console.log(chess);

function min (a, b){
    if (a > b){
        console.log(`${a} > ${b}`);
    }
    else{
        console.log(`${b} > ${a}`);
    }
}

min(1,2);
min(10, 2);

// 5 Рекурсия

function isEven(num){
    if (num%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

isEven(10);
isEven(-10);
isEven(11);




let arrImg = [];
for(let i = 0; i < 5; i++){
    let url = prompt('Enter url');
    arrImg.push(url);
}
console.log(arrImg);
let imgs = document.querySelectorAll('.images');
for(let img of imgs){
    if(img==nth-child(even)){
        img = arrImg[i];
    }
}