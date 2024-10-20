//TASK ZERO BASIC SETUP

//TASK TWO
//adding event listener to selector dropdown

const productSelector = document.getElementById('productSelector'); //references the HTML element though ID on javascrpit
const productPrice = document.getElementById('price'); //references the HTML element though ID on javascrpit
productSelector.addEventListener('change', function(){
const selectedPrice = productSelector.value; //displays prices based on which product is selected an its matching value
productPrice.textContent=`$${selectedPrice}`; 
});