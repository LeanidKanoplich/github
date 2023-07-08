// function printHello(username) {
//     console.log(`Hello ${username}`)
// }
 
// function printBye(username) {
//     console.log(`Bye ${username}`)
// }
 
// function printHowAreYou(username) {
//     console.log(`How are you ${username}`)
// }
 
// function doWithUser(username, callback) {
//     callback(username)
//     // console.log(callback)
// }
 
// doWithUser("John", printHello)
// doWithUser("John", printBye)
// doWithUser("Anna", printHowAreYou)

// Написать функцию forEach, которая принимает в качестве первого аргумента массив, а в  качестве второго функцию и вызывает принятую функцию для каждого элемента массива.



// function forEach(arr, callback) { // 2
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]) // 3
//     }
// }
 
// function callbackForArr(elem) { // 4
//     if (elem >= 0) {
//         console.log(elem)
//     }
// }
 
// // function pow(elem) {
// //     console.log(elem**2)
// // }
 
// const arr = [5, 68, -85, 0, 14, -6, 52]
// forEach(arr, callbackForArr) // 1
// // forEach(arr, pow)

// Совместно с преподавателем:
// Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка. Жмак.

const btn = document.querySelector("button")
function clickHandler( ) {
    console.log("Clicked")
}
btn.addEventListener("click", clickHandler)
    