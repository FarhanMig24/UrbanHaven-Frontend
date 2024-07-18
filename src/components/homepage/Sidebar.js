import React from 'react';
import './Sidebar.css';

const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
];

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href={`#${category.replace(/ /g, '-')}`}>{category}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
