const addToCart = () =>{
    console.log('add to cart');
    const product = document.getElementById('product');
    const quantity = document.getElementById('quantity');
    const productName = product.value;
    const productPrice = quantity.value;
    console.log(productName, productPrice);

    displayProduct(productName, productPrice);
    addProductToCart(productName, productPrice);

    product.value= '';
    quantity.value = '';
}

const getCart= () =>{
    const cart ={};
    return cart;
}

const addProductToCart= (product, quantity) =>{
    const cart = getCart();
    cart[product] = quantity;
    console.log('cart',cart);
}

const displayProduct = (product , price) =>{
    const li = document.createElement('li');
    li.innerText = `${product} : ${price}`;
    li.className = 'bg-gray-50 border-l-4 border-green-500 p-3 rounded text-gray-700 font-medium';

    // get the ul
    const ul = document.getElementById('product-container');
    ul.appendChild(li);
}
