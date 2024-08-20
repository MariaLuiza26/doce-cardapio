// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartContainer = document.getElementById('cart-container');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cart = [];
    
    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });
        
        cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const menuItem = button.closest('.menu-item');
            const name = menuItem.getAttribute('data-name');
            const price = parseFloat(menuItem.getAttribute('data-price'));
            cart.push({ name, price });
            updateCart();
        });
    });

    cartIcon.addEventListener('click', () => {
        cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
    });

    checkoutBtn.addEventListener('click', () => {
        alert('Compra finalizada!');
        cart = [];
        updateCart();
        cartContainer.style.display = 'none';
    });
});
