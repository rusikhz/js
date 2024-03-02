"use strict"
    let result = prompt("Введите слово")
    let stringArr = result.split("").reverse().join("")
    if (result == stringArr) {
        alert("Палиндром")
    } else {
        alert("Не палиндром")
    }
    /*3 строчка: создаем новую переменную разбиваем по символу, реверсируем и собираем обратно
    4 строчка проверяем если они равны палиндром если нет то нет */