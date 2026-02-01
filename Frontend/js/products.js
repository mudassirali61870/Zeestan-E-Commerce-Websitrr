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
            </div>
            <div class="product-info">
                <h3 class="product-title">Product 1 - TEST</h3>
                <div class="product-price">$29.99</div>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop" alt="Product 2">
            </div>
            <div class="product-info">
                <h3 class="product-title">Product 2 - TEST</h3>
                <div class="product-price">$59.99</div>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=300&h=400&fit=crop" alt="Product 3">
            </div>
            <div class="product-info">
                <h3 class="product-title">Product 3 - TEST</h3>
                <div class="product-price">$45.99</div>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop" alt="Product 4">
            </div>
            <div class="product-info">
                <h3 class="product-title">Product 4 - TEST</h3>
                <div class="product-price">$89.99</div>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop" alt="Product 5">
            </div>
            <div class="product-info">
                <h3 class="product-title">Product 5 - TEST</h3>
                <div class="product-price">$79.99</div>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=400&fit=crop" alt="Product 6">
            </div>
            <div class="product-info">
                <h3 class="product-title">Product 6 - TEST</h3>
                <div class="product-price">$49.99</div>
            </div>
        </div>
    `;
    console.log("6 test products added!");
}