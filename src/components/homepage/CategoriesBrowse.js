import React from 'react';
import './CategoriesBrowse.css';

const categories = [
    { name: 'Fashion', icon: '👗' },
    { name: 'Electronics', icon: '📱' },
    { name: 'Lifestyle', icon: '🏡' },
    { name: 'Medicine', icon: '💊' },
    { name: 'Sports', icon: '🏀' },
    { name: 'Toys', icon: '🧸' },
    { name: 'Groceries', icon: '🛒' },
    { name: 'Beauty', icon: '💄' }
];

const CategoriesBrowse = () => {
    return (
        <div className="categories-browse">
            <h2>Browse By Category</h2>
            <div className="categories">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <div className="icon-wrapper">
                            <span className="category-icon">{category.icon}</span>
                        </div>
                        <span className="category-name">{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesBrowse;
