// 1 Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 
// function createArr(a, b) {
//     const newArr = []
//     let min = b
//     let max = a
//     if (a < b) {
//         min = a
//         max = b
//     }

//     for(let i = min; i <= max; i++) {
//         newArr.push(i)
//     }
//     return newArr
// }
// console.log(createArr(4, 16))

// 2 Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему. 
// function createArr(a, b) {
//     const newArr = []
//     let min = b
//     let max = a
//     if (a < b) {
//         min = a
//         max = b
//     }
//     for(let i = max; i >= min; i--) {
//         newArr.push(i)
//     }
//     return newArr
// }

// console.log(createArr(16, 4))

// 3 В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.
// const list = [5, 4, 9, 12, 23]
// let sum = 0
// for(let i = 0; i < list.length; i++) {
//     sum = sum + list[i]
// }
// console.log(sum)

// 4 В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.
// const list = [5, 4, -9, 12, 23, -5]
// let sum = 0
// for(let i = 0; i < list.length; i++) {
//     if(list[i] > 0) {
//         sum = sum + list[i]
//     }
// }
// console.log(sum)

// 5 В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// const list = [5, 4, -9, 12, 23, -5, 44, -65, 12, 30]
// let sumEvens = 0
// let sumOdds = 0
// for (let i = 0; i < list.length; i++) {
//     if(list[i] % 2 === 0) {
//         sumEvens = sumEvens + list[i]
//     } else {
//         sumOdds = sumOdds + list[i]
//     }
// }
// console.log(`Sum of evens = ${sumEvens}`)
// console.log(`Sum of ODDS = ${sumOdds}`)
// console.log(sumEvens - sumOdds)

// 6 Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.
// function getArrStats(arr) {
//     let sum = 0
//     let minimum = arr[0]
//     let maximum = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]

//         if(minimum > arr[i]) {
//             minimum = arr[i]
//         }
//         if (maximum < arr[i]) {
//             maximum = arr[i]
//         }
//     }

//     const avg = sum / arr.length
//     return {
//         min: minimum,
//         max: maximum,
//         avg: avg
//     }
// }
// const list = [5, 4, -9, 12, 23, -5, 44, -65, 12, 30]
// console.log(getArrStats(list))
// 7 В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
// const word = "hello world"
// let reversed = ''
// for (let i = word.length - 1; i >= 0; i--) {
//     reversed = reversed + word[i]
// }
// console.log(reversed) // "dlrow olleh"

// 8 Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// function isPalindrome(word) {
//     let reversed = ''
//     for (let i = word.length - 1; i >= 0; i--) {
//         reversed = reversed + word[i]
//     }

//     return reversed === word
// }
// console.log(isPalindrome("anna"))
// console.log(isPalindrome("hello"))

// 9 Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
// let sum = 0
// первый вариант
// for (let i = 0; i <= 50; i++) {
//     if (i % 5 === 0) {
//         sum = sum + i
//     }
// }
// второй вариант
// for (let i = 0; i <= 50; i += 5) {
//     sum = sum + i
// }
// console.log(sum)

// ============================================
const goods = [
    {
        id: 1,
        title: "bicycle",
        price: 45000,
        discount: 10
    },
    {
        id: 2,
        title: "roller-skates",
        price: 15000,
        discount: 5
    },
    {
        id: 3,
        title: "kick scooter",
        price: 10000,
        discount: 30
    },
    {
        id: 4,
        title: "skis",
        price: 25000,
        discount: 10
    },
    {
        id: 5,
        title: "skate",
        price: 10000,
        discount: 0
    }
]

// 10 Написать цикл, который выводит только названия товаров
// 11 Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
// 12 Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

for (let i = 0; i < goods.length; i++) {
    const {title, price, discount} = goods[i]
    console.log(`Title of product: ${title}`)
    console.log(`“${title} (${price})”`)
    console.log(`“${title} (${price - price * discount / 100})”`)
}

// 13 Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).
function getExpensiveProduct(products) {
    let expProduct = products[0]
    for (let i = 0; i < products.length; i++) {
        if(expProduct.price < products[i].price) {
            expProduct = products[i].price
        }
    }

    return expProduct
}

const result = getExpensiveProduct(goods)
console.log(result)