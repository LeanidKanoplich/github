// const usernameInput = document.querySelector(".username_input")
// const btn = document.querySelector("button")
// usernameInput.value = "Hello"
// btn.addEventListener("click", function () {
//     console.log(usernameInput.value) // значение исчезнет из консоли через ~1мс из-за обновления страницы 
// })

// Создать форму, при submit которой данные из формы выводятся в консоль.

// const usernameInput = document.querySelector(".username_input")
// const formElem = document.querySelector("form")
// formElem.addEventListener("submit", function(event) {
// event.preventDefault()    
// console.log(usernameInput.value)
// })

// const formElem = document.querySelector("form")
// const product_name = document.querySelector(".product_name")
// const product_price = document.querySelector(".product_price")
// formElem.addEventListener("submit", function(event) {
// event.preventDefault()    
// console.log(product_name.value)
// console.log(product_price.value)
// })

// const usernameInput = document.querySelector(".username_input")
// const btn = document.querySelector("button")
// usernameInput.value = "Hello"
// btn.addEventListener("click", function () {
//     console.log(usernameInput.value) // значение исчезнет из консоли через ~1мс из-за обновления страницы 
// })

// Создать форму, при submit которой данные из формы выводятся в консоль.
// const usernameInput = document.querySelector(".username_input")
// const formElem = document.querySelector("form")
// formElem.addEventListener("submit", function(event) {
//     event.preventDefault()
//     console.log(usernameInput.value)
// })

// =============== tasks ===============

// 1. Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.
// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта.
// {
//     name: "Notebook",
//     price: 4500
// }
const formElem = document.querySelector("#product_form")
const productNameInp = document.querySelector(".product_name")
const productPriceInp = document.querySelector(".product_price")
const products = []
formElem.addEventListener("submit", function (event) {
    event.preventDefault()
    // console.log(productNameInp.value)
    // console.log(productPriceInp.value)
    const productObject = {
        name: productNameInp.value,
        price: productPriceInp.value
    }
    products.push(productObject)
    rerender()

    formElem.reset()
    productNameInp.focus()
})

// 3. Добавить функцию, которая получает наименование карточки и цену и возвращает HTML элемент с карточкой товара.
function createProductCard(name, price) {
    const divElem = document.createElement("div")
    divElem.classList.add("product-item")
    const pName = document.createElement("p")
    pName.innerText = name
    const pPrice = document.createElement("p")
    pPrice.innerText = price
    divElem.append(pName, pPrice)

    return divElem
}
// 4. Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.
// {
//     name: "Notebook",
//     price: 4500
// }

// Доработать rerender таким образом, чтобы при двойном клике по карточке в консоль выводилось название товар.

const productsContainer = document.querySelector(".products_container")
function rerender() {
    productsContainer.innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        const {name, price} = products[i]
        const productElem = createProductCard(name, price)
        productElem.addEventListener("dblclick", function() {console.log(name);
        })
        productsContainer.append(productElem)
    }
}