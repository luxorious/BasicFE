// Масиви

// let fruits = ["Apple", 'Banana'];

// console.log(fruits.length);

// let fruit1 = fruits[0];
// let fruit2 = fruits[1];

// console.log(fruit1);
// console.log(fruit2);

// let new_fruits = fruits.push('Orange'); //add element to end of array

// console.log(fruits);

// let del_last = fruits.pop(); //del the last elemof array


// fruits.unshift('Orange');
// console.log(fruits);


// fruits.shift(); //del first elem of array
// console.log(fruits);

// fruits.push('Mango');
// console.log(fruits);

// console.log(fruits.indexOf('Mango'));//find index of elem in array

// //let removeditem = fruits.splice(1, 1);//del elem from array by index

// console.log(fruits);

// let removeditem = fruits.splice(1, 3);


// console.log(removeditem)

// let arr = [];
// let num1 = +prompt('Enter your numb');
// let num2 = +prompt('Enter your numb');
// let num3 = +prompt('Enter your numb');

// arr.push(num1, num2, num3);

// console.log(arr)

// arr[2] = 5;

//Заокруглення 
// Math.floor(); //в меншу сторону 2.6 = 2
// Math.ceil(); //в більшу сторону 2.4 ==3
// Math.round(); //звичайне

// let arr = [1,4,2,5,3];
// let sqrt = [];

// for (let i = 0; i < arr.length; i++){
//     sqrt.push(arr[i]**2);
// }
// console.log(sqrt)

// for (let i = 0; i < arr.length; i++){
//     console.log(i);
//     if (i ==2){
//         break;
//     }
// }
// console.log(arr)

// for (let i = 0; i < arr.length; i++){
//     if (i ==2){
//         continue;
//     }
//     console.log(i);
// }
// console.log(arr)

// let arr = [];

// for (let i = 0; i < 3; i++){
//     arr.push(Number(prompt('input')))
// }
// console.log(arr)

// let arr = [1, 12, 23, 14, 11, 23, 123, 12, 42];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2==0){
//         console.log(arr[i])
//     }
// }
// // console.log(arr)

let arr = [1, 12, 23, 14, 11, 23, 123, 12, 42];

let sum = 0;

for(let i = 0; i < 5; i++){
    if (arr[i] > 0){
        sum = sum + arr[i];
    }
}

console.log(sum)
