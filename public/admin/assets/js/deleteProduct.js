const deleteProduct = (id) => {
    products = products.filter((product) => {
        return product.id != id;
    });                      
    localStorage.setItem('products', JSON.stringify(products));
    read();
}