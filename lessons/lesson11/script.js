// let div = document.createElement('div');

// div.classList.add('block1');
// div.innerHTML = '<b> Hello </b> world';
// document.body.prepend(div)

// let ol = document.querySelector('ol');
// ol.before('Before')

// ol.after('After');

// let liFirst = document.createElement('li');

// liFirst.innerText = 'First';

// ol.prepend(liFirst);

// let lisecond = document.createElement('li');

// lisecond.innerText = "Last";
// ol.append(lisecond);

// console.log(document.body.className);
// document.body.className = 'main_block';

// document.body.classList.add('article'); //add class to block

// document.body.classList.remove('main'); // remove class from block

// document.body.classList.toggle('main'); // if class exist - toggle delets, if notexists - toggle create class

// console.log(document.body.classList.contains('article'));

// let class_list = document.body.classList;

// console.log(class_list);

// for(let name of class_list){
//     console.log(name);
// }


// document.querySelector('p').remove();

// // Practice 
// // task1
// function clear(elem){
//     let list = document.querySelectorAll(elem);
//     for(let i of list){
//         i.remove();
//     }
// }

// clear('li');


// //task2

// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true){
//     let ask = prompt('Input your text for list: ')
//     if (ask == ''|| ask == " "){
//         break;
//     }
//     let li = document.createElement('li');
//     li.innerText = ask;
//     ul.append(li);
// }


function my_funk(callback){
    let a = [1,2,3,4,5]
    let element = document.querySelector('.paragraph');
    callback(element, a);
}

function out(elem, arr){
    elem.innerHTML = arr.join(' ')
}

my_funk(out)