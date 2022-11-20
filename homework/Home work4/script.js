// // task1
// // Составьте программу, которая присваивает переменной d значение 7, а затем выводит на экран: в первой строке - это значение, во второй – квадрат этого значения, в третьей – куб этого значения.
// let d = 7;
// console.log(`number - ${d},\nsqrt - ${d**2},\ncubic - ${d**3}`);

// // task2
// // Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, увеличивает его вдвое. Программа должна выводить на экран новое значение.
// let number = Number(prompt("Input your number"));
// if (number > 0){
//     console.log(number*2);
// } else{
//     console.log('Wrong input');
// }

// // task3
// // Составьте программу, которая принимает с клавиатуры целое число и выводит на экран одно из следующих сообщений: "положительное", или "отрицательное", или "ноль" – в зависимости от значения числа.
// let number = Number(prompt("Input your number"));
// if (number > 0){
//     console.log("положительное");
// } else if (number == 0){
//     console.log("ноль");
// } else if (number < 0){
//     console.log("отрицательное");
// } else{
//     console.log('не число!!!');
// }

// // task4
// // Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же наоборот – выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".
// let num1 = +(prompt("Input first number: "));
// let num2 = Number(prompt("Input second number: "));

// if (num1 == num2){
//     console.log('the same numbers ');
// } else if(num1 > num2){
//     console.log(num1 + num2);
// } else{
//     console.log(num1 * num2);
// }

// // task5
// // Составьте программу, которая принимает с клавиатуры целое число и выводит на экран его квадрат – но только в том случае, если введенное число отрицательно. В противном случае – на экран выводится сообщение "ошибка".
// let num = Number(prompt('Input Number:'));
// if (num < 0){
//     console.log(num**2);
// } else {
//     console.log('ERROR!!!');
// }

// // task6
// // Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в кабинете. Программа проверит соответствие между этими двумя значениями и выведет на экран соответствующую информацию. ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает)
// let number_of_students = Number(prompt("Input number of scool children: "));
// let quantity_chair = Number(prompt('Input quantity chairs in class room'));

// if (number_of_students <= quantity_chair){
//     console.log('стульев хватает');
// }else {
//     console.log('стульев не хватает')
// }

// // task7
// // Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке. Перед началом вывода на экран следует вывести "старт", а после окончания вывода чисел – "финиш". вывод: старт, 1, … 9, финиш)
// //console.log('start, 1, 2, 3, 4, 5, 6, 7, 8, 9, finish');

// let list = [1,3,5,2,4,9,8,7,0,6];
// for (let i = 0; i < list.length; i++){
//     for (let j = 0; j < list.length; j++){
//         if (list[j] > list[i]){
//             let tmp = list[j];
//             list[j] = list[i];
//             list[i] = tmp;
//         }
//     }
// }
// list.unshift("Start");
// list.push('finish');
// console.log(list);


// // task8
// // Составьте программу, которая выводит на экран все двузначные положительные числа, делящиеся без остатка на 5 (начиная с наименьшего).
// let numbers_list = [];
// for (let i = 10; i < 100; i++){
//     if (i%5===0){
//         numbers_list.push(i);
//     }
// }
// console.log(numbers_list);


// // task9
// // Составьте программу, которая принимает с клавиатуры целое число и выводит на экран 7 последующих за ним нечетных чисел.
// let num = +(prompt('Input number'));
// let k;
// if (num%2 == 0){
//     k = 15
// } else {
//     k = 16
// }
// for (let i = 0; i < k; i++){
//     if (num%2==0 && i%2==0){
//         console.log(num++);
//     } else if (num%2!=0 && i%2!=0){
//         console.log(num)
//         num+=2
//     }
// }

// // task10
// // Написать цикл, который выводит те числа из массива, которые больше или равны 15.
// let generated_list = [];
// for (let i = 0; i < 101; i++){
//     generated_list.push(i);
// }
// for (i in generated_list){
//     if (i >= 15){
//         console.log(i)
//     }
// }

// // task11
// // Написать цикл, который выводит только нечетные числа 
// for (let i = 0; i <=5; i++){
//     if (i%2!=0){
//         console.log(i)
//     }
// }

// // task12
// // Вывести только те значения массива, индекс которых кратен трем
// for (let i = 0; i <=100; i++){
//     if (i%3==0){
//         console.log(i);
//     }
// }

// // task13
// // Найти сумму чисел, чей индекс равен значению элемента.
// let list = [1, 3, 2, 2, 4, 2, 6, 7];
// let sum = 0;
// for (let i = 0; i <=100; i++){
//     if (i == list[i]){
//         sum+=i;
//     }
// }
// console.log(sum)

// // task14
// //Найти сумму нечетных чисел и вывести в консоль. 
// let sum = 0;
// for (let i = -10; i <=100; i++){
//     if (i%2 != 0){
//         sum += i
//     }
// }
// console.log(sum)

// // task15
// // Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
// let sum_even = 0;
// let sum_odd = 0;

// let arr = [];
// for (let i = 0; i < 150; i++){
//     arr.push(i);
// }

// for (let i in arr){
//     if (i%2==0){
//         sum_even += +(i);
//     } else {
//         sum_odd += Number(i);
//     }
// }

// console.log(sum_even)
// console.log(sum_odd)
// if (sum_even > sum_odd){
//     console.log("sum even - sum odd = " + (sum_even - sum_odd));
// } else {
//     console.log("sum odd - sum even = " + (sum_odd - sum_even));
// }