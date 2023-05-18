

function getProducts () {
    fetch("https://2019181052.github.io/HomeworkRepository/LAB4/product.json")
    .then(function(response) {
        return response.json();
    })
}

/* function displayProducts(products) {
    
} */

getProducts().then((products => {
    console.log(products);
    //displayProducts(products)
}));