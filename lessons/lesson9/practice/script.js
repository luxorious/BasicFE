// let user = {};

// let key = name;"John"

// user.name = "John";
// user.surname = "Smith";
// console.log(user)

// user.name = "Pete",
// console.log(user);

// delete user["name"];

// console.log(user);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;

// for(let k in salaries){
//     sum += salaries[k];
// }
// console.log(sum)


// let sum1;
// for(let [k, v] of Object.entries(salaries)){
//     sum1 += v;
// }
// console.log(sum1)


// let numb1 = 11// +(prompt("Input numb"));

// function check(num){
//     if(num%2==0){
//         alert('Yes')
//         return;
//     }
//     alert('No')
// }

// check(numb1)

// let numb2 = 10// +(prompt("Input numb"));

// function check(num){
//     if(num%2==0){
//         alert('Yes')
//     }
//     else{
//         alert('No')
//     }
// }

// check(numb2)


// let num1 = -11 //+(prompt("Input numb"));
// let num2 = -1 //+(prompt("Input numb"));

// function min(a, b){
//     if (a < b){
//         return a;
//     }
//     return b;
// }

// console.log(min(num1, num2))

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
let num1 = 3; //+(prompt("Input numb"));
let num2 = 2;//+(prompt("Input numb"));
console.log('are you working');
function news(x, n){
    let new_numb = 1;
    if (n > 0){
        if(n%1 == 0){
            for(let i = 1; i <= n; i++){
                new_numb *= x;
            }  
            return new_numb;
        }
    }
    return "Error";
}

console.log(news(num1, num2));
