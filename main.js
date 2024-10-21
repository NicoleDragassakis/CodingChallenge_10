//TASK ZERO BASIC SETUP

//TASK TWO
//adding event listener to selector dropdown
const priceElement = document.getElementById("product-price"); // references the HTML element through ID on JavaScript
const sizeSelector = document.getElementById("size-selector"); // references the HTML element through ID on JavaScript
sizeSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value; 
    priceElement.textContent = `$${selectedPrice}`;

//TASK THREE
const purchaseButton = document.getElementById('purchase-button');
const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const stockStatus = selectedOption.getAttribute('data-stock');
    purchaseButton.disabled = stockStatus === 'out-of-stock';
});
//Task four
purchaseButton.addEventListener('click', function() {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const stockStatus = selectedOption.getAttribute('data-stock');

    if (stockStatus === 'in-stock') {
        alert('Thank you for your purchase, your order has been confirmed.');
    } else {
        alert('Sorry, this product is out of stock.');
    }
});