import React from 'react';
import './BestSellingProducts.css';

const products = [
    { name: 'Product 1', price: '$99.99', category: 'Fashion', image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', price: '$199.99', category: 'Electronics', image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', price: '$299.99', category: 'Lifestyle', image: 'https://via.placeholder.com/150' },
    { name: 'Product 4', price: '$399.99', category: 'Medicine', image: 'https://via.placeholder.com/150' },
    { name: 'Product 5', price: '$499.99', category: 'Sports', image: 'https://via.placeholder.com/150' },
    { name: 'Product 6', price: '$599.99', category: 'Toys', image: 'https://via.placeholder.com/150' },
    { name: 'Product 7', price: '$699.99', category: 'Groceries', image: 'https://via.placeholder.com/150' },
    { name: 'Product 8', price: '$799.99', category: 'Beauty', image: 'https://via.placeholder.com/150' }
];

const BestSellingProducts = () => {
    return (
        <div className="best-selling-products">
            <h2>Best Selling Products</h2>
            <div className="products">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <p className="product-category">{product.category}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellingProducts;
