const form = document.querySelector('#FilterForm');
const resetFiltersButton = document.querySelector('#resetFiltersButton');


const FilterProductsByAsc = () => {
    let orderPriceDesc = document.querySelector('#OrderPriceDesc');
    let orderPriceAsc = document.querySelector('#OrderPriceAsc');
    orderPriceAsc.classList.add('activeFilter');
    orderPriceDesc.classList.remove('activeFilter');
    products.sort((a, b) => a.price - b.price);
    read();
}

const FilterProductsByDesc = () => {
    let orderPriceDesc = document.querySelector('#OrderPriceDesc');
    let orderPriceAsc = document.querySelector('#OrderPriceAsc');
    orderPriceDesc.classList.add('activeFilter');
    orderPriceAsc.classList.remove('activeFilter');
    products.sort((a, b) => b.price - a.price);
    read();
}


const FilterProducts = (event) => {
    event.preventDefault();
    let searchedName = document.querySelector('#searchByName').value;

    if (searchedName != "")
        FilterProductsByName(searchedName);

    let searchedCategory = document.querySelector('#searchedCategory').value;

    if (searchedCategory != "")
        FilterProductsByCategory(searchedCategory);
    read();
}


const FilterProductsByName = (searchedName) => {
    products = products.filter((product) => {
        return product.name == searchedName;
    });
}

const FilterProductsByCategory = (searchedCategory) => {
    products = products.filter((product) => {
        return product.category == searchedCategory;
    });
}

form.addEventListener('submit', (event) => FilterProducts(event));


const resetFilters = () => {
    let orderPriceDesc = document.querySelector('#OrderPriceDesc');
    let orderPriceAsc = document.querySelector('#OrderPriceAsc');
    orderPriceDesc.classList.remove('activeFilter');
    orderPriceAsc.classList.remove('activeFilter');
    products = JSON.parse(localStorage.getItem('products')) || [];
    read();
}

resetFiltersButton.addEventListener('click', resetFilters);