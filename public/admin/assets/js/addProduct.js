let products = JSON.parse(localStorage.getItem('products')) || [];
let lastId = parseInt(localStorage.getItem('lastId')) || 0;

const form = document.querySelector('#productForm');

const addProduct = (event) => {
    event.preventDefault();

    const productName = document.querySelector('.addProductForm #productName');
    const productPrice = document.querySelector('.addProductForm #price');
    const productCategory = document.querySelector('.addProductForm #category');
    const productImage = document.querySelector('.addProductForm #imageUrl');

    let product = {
        id: ++lastId,
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        image: productImage.value,
    }

    products.push(product);
    
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('lastId', JSON.stringify(product.id));
}

console.log(products);
form.addEventListener('submit', (event) => addProduct(event));