let products = JSON.parse(localStorage.getItem('products')) || [];

const read = () => {
    const slider = document.querySelector('.slider');
    slider.innerHTML = '';
    if (products.length != 0) {
        products.forEach(product => {
            slider.innerHTML += `<div class="card">
        <img src="${product.image}" alt="valorant Image">
        <h2>${product.name}</h2>
        <p>Price: ${product.price}$</p>
        </div>`
        });

        slider.innerHTML += `<div class="arrows">
                <i class="fa-solid fa-arrow-left arrowButton leftArrowBorderRadious" onclick="leftClick()"></i>
                <i class="fa-solid fa-arrow-right arrowButton" onclick="rightClick()"></i>
            </div>`;
        initializeSlider();
    } else {
        indecators.innerHTML = '';
        slider.innerHTML = `<h2>No Results Found For Products</h2>`
    }
}

/**
 * Uncomment This To Add Products:
 */

// let testProducts = [
//     {
//         id: 1,
//         name: "Colombian Arabica Coffee Beans - Medium Roast",
//         price: 15.99,
//         category: "Coffee Beans",
//         image: "https://cdn.shopify.com/s/files/1/0538/6200/6955/products/Colombian-Supremo-Coffee-RUCC-1616302140.jpg?v=1616302143"
//     },
//     {
//         id: 2,
//         name: "Home Espresso Machine - Automatic",
//         price: 299.00,
//         category: "Coffee Brewers",
//         image: "https://aromatherapynaturals.com/wp-content/uploads/2024/12/top_automatic_espresso_machines-1.jpg"
//     },
//     {
//         id: 3,
//         name: "Manual Coffee Grinder - Burr",
//         price: 45.50,
//         category: "Coffee Grinders",
//         image: "https://thewestcoastchef.com/wp-content/uploads/2020/08/03A-Lifestyle.jpg"
//     },
//     {
//         id: 4,
//         name: "Premium Ceramic Coffee Mugs - Set of 4",
//         price: 25.00,
//         category: "Coffee Accessories",
//         image: "https://tse2.mm.bing.net/th/id/OIP.oPW-3cH70bYqqg23t4xNYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
//     },
//     {
//         id: 5,
//         name: "Espresso Machine Cleaning Brush",
//         price: 9.75,
//         category: "Cleaning & Maintenance Tools",
//         image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1a8e094a-7dc1-43ac-9793-b2cdd421e9e3.__CR0,0,970,600_PT0_SX970_V1___.jpg"
//     },
//     {
//         id: 6,
//         name: "Ethiopian Yirgacheffe Coffee Beans - Light Roast",
//         price: 18.50,
//         category: "Coffee Beans",
//         image: "https://tse1.mm.bing.net/th/id/OIP.8Ccs-RmDzbNq9JkPrlbECgHaGG?rs=1&pid=ImgDetMain&o=7&rm=3"
//     },
//     {
//         id: 7,
//         name: "V60 Pour-Over Coffee Brewer",
//         price: 35.00,
//         category: "Coffee Brewers",
//         image: "https://tse1.explicit.bing.net/th/id/OIP.0iXSRFDMdtBIWxFeQ2oKpQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
//     },
//     {
//         id: 8,
//         name: "Digital Coffee Scale with Timer",
//         price: 55.00,
//         category: "Coffee Accessories",
//         image: "https://frandimore.com/plantainchips/wp-content/uploads/2024/02/Digital-Coffee-Scale-with-Timer-LED-Screen-Espresso-USB-3kg-Max-Weighing-0-1g-High-Precision-1.webp"
//     },
//     {
//         id: 9,
//         name: "Coffee Machine Cleaning Pods",
//         price: 12.00,
//         category: "Cleaning & Maintenance Tools",
//         image: "https://kaffekapslen.media/media/catalog/product/cache/a86f615258b5c7239775347fd30c1e2a/n/e/nespresso-caffenu-descaling-cleaning-kit-1203.jpg"
//     },
//     {
//         id: 10,
//         name: "Brazilian Coffee Beans - Dark Roast",
//         price: 14.75,
//         category: "Coffee Beans",
//         image: "https://th.bing.com/th/id/R.68c91e46b53111058efc493ae5af7a04?rik=rAO4FnWZhS1eMw&riu=http%3a%2f%2fwww.grumpymancoffee.com%2fcdn%2fshop%2fproducts%2f15.png%3fv%3d1669061509&ehk=1BaCXLB631Uk3TTf4DD4aI2fqr8qmkaGHsghJKfnXSA%3d&risl=&pid=ImgRaw&r=0"
//     }
// ];

// localStorage.setItem('products', JSON.stringify(testProducts));
// localStorage.setItem('lastId', JSON.stringify(10));

read();