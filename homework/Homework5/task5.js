// // 5.Создать HTML страницу с заголовком, с тремя блоками, в каждом блоке должен быть соответствующий заголовок(My profession, My hobby, My family) и должна быть картинка. Получится страница, похожую на первое дз "Мой блог". CSS тоже можно добавить к странице. Написать скрипт, который будет запрашивать у пользователя имя, url  адрес картинки, которая описывает его профессию, url  адрес картинки, которая описывает его хобби и url  адрес картинки, которая описывает его семью.В результате должны получить страницу с заголовком "Hello, <имя пользователя>", а в блоках соответствующие картинки.

let links = [];
for (let i = 0; i < 4; i++){
    if (i == 0){
        let link = prompt(`enter Your name: `)
        links.push(link)
        continue;
    }
    let l = '-st link about your proffesion'
    if (i == 2){
        l ='-nd link which describe your hobby'
    } else if(i == 3){
        l = '-rd link which describe your family'
    }
    let link = prompt(`enter ${i} - ${l}: `)
    links.push(link)
}

console.log(links)

