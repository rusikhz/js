"use strict"
// let word = prompt('Введите слово',)
// let reverse = i => {
//     i.split('')
//     .reverse()
//     .join('')
// }
// alert(reverse(word))
let str = prompt('Введите слово',)
alert([...str].reverse().join(''))
/* Мы обьявляем значение переменой которое будет с клавиатуры, оно выводит окно это слово разбивается реверсируется и собиарется обратно
*/