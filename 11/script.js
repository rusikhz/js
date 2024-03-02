// Тут ваше решение
let btn = document.querySelector('.btn')
let text = document.querySelector('.text')
btn.addEventListener("click", () =>{
    text.textContent = "Пока, мир"
})
// мы беремт кнопку из хтмл 3- текст из хтмл 4- 
//мы в кнопках добавляем ивент который меняет текст