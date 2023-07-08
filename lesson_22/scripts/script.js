// const pElem = document.querySelector("p")
// console.log(pElem.classList)
// pElem.classList.remove("second_class")
// pElem.classList.add("third_class")
// console.log(pElem.classList.contains("first_class"));
// pElem.classList.toggle("test_class")




// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
// const numberCardsDiv = document.querySelector(".number_cards")
// for (let i = 0; i < 10; i++) {
//     const cardDiv = document.createElement("div") // <div></div>
//     cardDiv.innerText = i // <div>{i}</div>
//     cardDiv.classList.add("card") // <div class="card">{i}</div>
//     numberCardsDiv.append(cardDiv)
//     cardDiv.addEventListener("click", function () {
//         cardDiv.classList.add("active") 
//     })
// }

// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.


// const numberCardsDiv = document.querySelector(".number_cards")
// for (let i = 0; i < 10; i++) {
//     const cardDiv = document.createElement("div") // <div></div>
//     cardDiv.innerText = i // <div>{i}</div>
//     cardDiv.classList.add("card") // <div class="card">{i}</div>
//     numberCardsDiv.append(cardDiv)
//     cardDiv.addEventListener("click", function () {
//         cardDiv.classList.toggle("active") 
//     })
// }

// const divElem = document.createElement("div")
// divElem.style.width = "150px"
// divElem.style.height = "150px"
// divElem.style.backgroundColor = "green"
// divElem.style.border = "5px solid black"
// document.body.append(divElem)

// const divElem = document.createElement("div")
// divElem.style.width = "150px"
// divElem.style.height = "150px"
// divElem.style.border = "5px solid black"
// divElem.style.margin = "5px"
// document.body.append(divElem)
// red green blue
//#fffff
//rgb(255, 100, 250) [0-255]
//math.random() []
// divElem.addEventListener("mouseover", function() {console.log("i am here")
// const red = Math.ceil(Math.random() * 255)
//     const green = Math.ceil(Math.random() * 255)
//     const blue = Math.ceil(Math.random() * 255)
//     console.log(red, green, blue)
//     const backgroundColor = `rgb(${red}, ${green}, ${blue})`
//     console.log(backgroundColor)
//     divElem.style.backgroundColor = backgroundColor
// })

// divElem.addEventListener("mouseout", function() {console.log("i am here")
// const red = Math.ceil(Math.random() * 255)
//     const green = Math.ceil(Math.random() * 255)
//     const blue = Math.ceil(Math.random() * 255)
//     console.log(red, green, blue)
//     const backgroundColor = `rgb(${red}, ${green}, ${blue})`
//     console.log(backgroundColor)
//     divElem.style.backgroundColor = "white"
// })

// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

for (let i = 0; i <= 255; i+=5) {
    const divElem = document.createElement("div")
    divElem.style.width = "100%"
    divElem.style.height = "150px"
    const rgbString = `rgb(128, 128, ${i})`
    divElem.style.backgroundColor =rgbString
    document.body.append(divElem)
}



