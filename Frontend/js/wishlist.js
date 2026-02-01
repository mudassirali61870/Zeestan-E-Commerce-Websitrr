// Direct test
const grid = document.getElementById('productsGrid');
if (grid) {
    grid.innerHTML = `
        <div style="text-align:center; padding:20px; grid-column:1/-1;">
            <h3>Test Mode - 6 Products</h3>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop" alt="Product 1">
                <span class="product-badge sale">SALE</span>
                <button class="wishlist-btn">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">Men</span>
                <h3 class="product-title">Premium Cotton T-Shirt</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <span>(4.0)</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$24.99</span>
                    <span class="original-price">$29.99</span>
                </div>
                <button class="btn btn-primary add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop" alt="Product 2">
                <button class="wishlist-btn">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">Men</span>
                <h3 class="product-title">Classic Denim Jeans</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span>(4.7)</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$59.99</span>
                </div>
                <button class="btn btn-primary add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=300&h=400&fit=crop" alt="Product 3">
                <span class="product-badge sale">SALE</span>
                <button class="wishlist-btn">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">Women</span>
                <h3 class="product-title">Summer Floral Dress</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <span>(4.6)</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$39.99</span>
                    <span class="original-price">$45.99</span>
                </div>
                <button class="btn btn-primary add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop" alt="Product 4">
                <span class="product-badge sale">SALE</span>
                <button class="wishlist-btn">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">Men</span>
                <h3 class="product-title">Casual Jacket</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <span>(4.3)</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$74.99</span>
                    <span class="original-price">$89.99</span>
                </div>
                <button class="btn btn-primary add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop" alt="Product 5">
                <span class="product-badge sale">SALE</span>
                <button class="wishlist-btn">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">Kids</span>
                <h3 class="product-title">Running Shoes</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>(4.8)</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$69.99</span>
                    <span class="original-price">$79.99</span>
                </div>
                <button class="btn btn-primary add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=400&fit=crop" alt="Product 6">
                <span class="product-badge sale">SALE</span>
                <button class="wishlist-btn">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">Accessories</span>
                <h3 class="product-title">Leather Wallet</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <span>(4.4)</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$39.99</span>
                    <span class="original-price">$49.99</span>
                </div>
                <button class="btn btn-primary add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    // Update results count
    const results = document.getElementById('resultsCount');
    if (results) {
        results.textContent = "6 products found";
    }
    
    // Add event listeners for buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-title').textContent;
            alert(`Added "${productName}" to cart!`);
        });
    });
    
    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', function() {
            const heartIcon = this.querySelector('i');
            if (heartIcon.classList.contains('far')) {
                heartIcon.classList.remove('far');
                heartIcon.classList.add('fas');
                alert('Added to wishlist!');
            } else {
                heartIcon.classList.remove('fas');
                heartIcon.classList.add('far');
                alert('Removed from wishlist!');
            }
        });
    });
    
    console.log("6 test products with Add to Cart buttons added!");
}