"use strict"
let color = document.querySelector('.color')
let btn = document.querySelector('.btn')
function colors(color) {
    document.body.style.background = color
}
btn.addEventListener('click', function jopa(){
    colors(color.value)
})
/*2 строка берем с хтлм документа строка ввода, 3 берем кнопку с хтлм
4 строка функция которая будет добавлять цвет фона равный тексту в строке
7 строка-добавляем событие, событие там клик, там будет функция которая передает значение в фунцию jopa  */