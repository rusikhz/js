
"use strict"
let name = document.querySelector('.name')
let email = document.querySelector('.email')
let button = document.querySelector('.button')
button.addEventListener("click", () => {
    if (email.value == "" || name.value == ""){
        alert("Ошибка валидации")
    }
})
console.log(name,email)
// мы кнопки добавляем ивент в которой проверяется содержание поле ввода имайла на пустоту и если поле ввода имени пусто выдает ошибка валедации