function getProducts() {
    return fetch("https://2019181052.github.io/HomeworkRepository/LAB4/product.json")
    .then((response) => response.json())
    .then((json) => json.products);
}

/* function displayProducts(products) {

} */

getProducts().then((products => {
    console.log(products);
    //displayProducts(products)
}));