"use strict"
function countVowels(str) {
    let arr = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
let inp = prompt("Введите слово")
alert(countVowels(inp))
/* создаем функцию со списком всех гласных
циклом перебираем слово с клавиатуры 
6 строка проверка на наличие внутри(все слова будут маленькими буквами)
и там считаем сколько гласных будет*/