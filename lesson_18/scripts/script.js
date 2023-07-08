// const p = document.querySelector("p")
// console.log(p) // Node

// const pElems = document.querySelectorAll("p")
// console.log(pElems) // nodelist collection
// for (let i = 0; i < pElems.length; i++) {
//     console.log(pElems[i])
// }
// 1 - методы массивов не работают на nodelist [push, pop]
// 2 - nodelist коллекции могут быть жывими, реагировать на изменение dom дерева
// 3 - nodelist предостовляется в браузере а array встроен в js

// ================ innerText ================
// const p = document.querySelectorAll("p")
// console.log(p.innerText)
// p.innerText = "Hello world!"

// const pSecond = document.querySelector(".paragraph_2")
// pSecond.innerText = "Second paragraph"

// ================ tasks ================
// Написать программу, которая находит параграфы по классу и заменяет в каждом из них текст на “привет”.
// const pELems = document.querySelectorAll(".text")
// for (let i = 0; i < pELems.length; i++) {
//     pELems[i].innerText = "привет"
// }

// Найти элемент с идентификатором main и записать в него текст “Я главный элемент”. 
// const mainDiv = document.querySelector("#main")
// mainDiv.innerText = "Я главный элемент"

// ================ setAttribute ================
// const imgElem = document.querySelector("img")
// const url = "https://i.wpimg.pl/360x240/wpcdn.pl/extradom/designs/70658/559632/07dbd048ce1115e92075eb7dfe0a232e8f8eca794e871d721823f20e2dac7545.jpg"
// imgElem.setAttribute("src", url)
// imgElem.setAttribute("data-test", "hello")

// Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение.

// const url = "https://cdn.riastatic.com/photosnewr/ria/dom_news_logo/vash-lichnyj-dom-vash-aktiv__211674-620x0.jpg"
// const imgElems = document.querySelectorAll(".main img")
// for (let i = 0; i < 5; i++) {
//     imgElems[i].setAttribute("src", url)
// }

// Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.
// const aElem = document.querySelector("a")
// console.log(aElem.href)
// const aElems = document.querySelectorAll("a")
// const links = []
// for (let i = 0; i < aElems.length; i++) {
//     links.push(aElems[i].href)
// }
// console.log(links)