// // 1.Написать функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 
// let list = [];
// function nums(a, b){
//     if (a < b){
//         for(let i = a; i <=b; i ++){
//             list.push(i)
//         }
//     }

//     else{
//         for(let i = b; i <=a; i ++){
//             list.push(i)
//         }
//     }

//     console.log(list)
// }
// nums(30, 10)


// // 2.Создать HTML страницу с разными ссылками.
// // Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.
// let links = document.querySelectorAll('a');
// for(let link of links){
//     console.log(link)
// }


// // 3.Написать функцию addAttribute, которая приминает три аргумента SelectorName, AttName и AttValue, и соответственно для селектора(SelectorName) добавляет атрибут(AttName) со значением (AttValue).Функция должна работать как объединение уже готовых функций querySelector и setAttribute.
// // заменяет все елементи
// function addAttribute(SelectorName, AttName, AttValue){
//     let values = document.querySelectorAll(SelectorName);
//     for (let value of values){
//         value.setAttribute(AttName, AttValue);
//     }
// }

// addAttribute('img', 'src', 'https://cutt.ly/f1kCJeA')

// // or
// // end_index_of_elem - индекс елемента до которого надо заменить или создать дание
// function addAttribute(SelectorName, AttName, AttValue, end_index_of_elem){
//     for (let i = 0; i < end_index_of_elem; i ++){
//         document.querySelectorAll(SelectorName)[i].setAttribute(AttName, AttValue)
//     }

// }
// addAttribute('img', 'src', 'https://cutt.ly/f1kCJeA', 3)

// // or: index_of_elem - Замена одного елемента из списка.
// function addAttribute(SelectorName, AttName, AttValue){
//     let index_of_elem = +(prompt("input number of element which needs to change"));
//     document.querySelectorAll(SelectorName)[index_of_elem - 1].setAttribute(AttName, AttValue);
// }
// addAttribute('img', 'src', 'https://cutt.ly/f1kCJeA')

// // 4.Создать HTML страницу с блоком с классом images и внутри блока добавить 10 картинок. Написать скрипт, который запрашивает у пользователя url адреса пяти картинок и хранит их в массиве, находит все картинки, которые находятся в блоке с классом images и заменяет картинки с четными номерами на те, которые ввел пользователь по тому же порядку. 
// let url_images = [];
// for(let i = 0; i < 5; i++){
//     let link = prompt(`input url - ${i+1} image: \r`);
//     url_images.push(link);
// }

// let all_images = document.querySelectorAll('.images > img');
// let number_of_link = 0;
// let numbers = 0;

// for (let image of all_images){
//     if (numbers%2 != 0){ //если я верно понял условие, в ином случае заменит ʼ!=ʼ на ʼ==ʼ
//         image.setAttribute('src', url_images[number_of_link++]);
//     }
//     numbers ++;
// }


