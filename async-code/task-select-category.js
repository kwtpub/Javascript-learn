'use strict';


function renderSelector() {
  let selector = document.querySelector('.selector-category')
  selector.innerHTML = ``;
  fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(data => {
      data.forEach(el => { 
        let option = document.createElement('option')
        option.value = el.slug;
        option.textContent = el.name;
        selector.appendChild(option)
      });
    })  
}

renderSelector();



