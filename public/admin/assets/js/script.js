let products = JSON.parse(localStorage.getItem('products')) || [];



const read = () => {
    const productsTable = document.querySelector('.productsTable tbody');
    console.log(productsTable);
    productsTable.innerHTML = "";
    products.forEach(product => {
        productsTable.innerHTML += `<tr>
                    <td>
                        ${product.id}
                    </td>

                    <td>
                    ${product.name}
                    </td>

                    <td>
                    ${product.price}
                    </td>

                    <td>
                    ${product.category}
                    </td>

                    <td>
                        <a href="./updateProduct.html?id=${product.id}" class="button" onclick="storUpdatedPorductId()">Edit</a>
                        <a class="button" onclick="deleteProduct(${product.id})">Delete</a>
                    </td>
                </tr>`
    });
}
read()

