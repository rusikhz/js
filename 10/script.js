"use strict"
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://api.rcenext.ru/schedule';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.data
  console.log(authors)
})
.catch(function(error) {
  console.log(error)
});
/*Сделал по гайду */