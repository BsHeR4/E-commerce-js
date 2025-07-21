let products = JSON.parse(localStorage.getItem('products')) || [];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const form = document.querySelector('#productForm');



const productName = document.querySelector('.addProductForm #productName');
const productPrice = document.querySelector('.addProductForm #price');
const productCategory = document.querySelector('.addProductForm #category');
const productImage = document.querySelector('.addProductForm #imageUrl');

const showProduct = () => {
    let product = products.find(product => product.id == id);
    productName.value = product.name;
    productPrice.value = product.price;
    productImage.value = product.image;

}

const updateProduct = (event) => {
    event.preventDefault();

    products = products.map((product) => {
        if (product.id == id) {
            product.name = productName.value;
            product.price = productPrice.value;
            product.category = productCategory.value;
            product.image = productImage.value;
        }
        return product;
    });

    localStorage.setItem('products', JSON.stringify(products));
}

showProduct();
form.addEventListener('submit', (event) => updateProduct(event));