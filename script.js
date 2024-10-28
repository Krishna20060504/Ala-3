// Function to search products
function searchProducts() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let productItems = document.getElementsByClassName('product-item');
    
    for (let i = 0; i < productItems.length; i++) {
        let productName = productItems[i].getAttribute('data-name').toLowerCase();
        if (productName.includes(input)) {
            productItems[i].style.display = "block";
        } else {
            productItems[i].style.display = "none";
        }
    }
}
