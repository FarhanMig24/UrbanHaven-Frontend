import React, { useState, useEffect } from 'react';
import './Flashsales.css';

const initialFlashSales = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        price: 120,
        discount: 40,
        originalPrice: 160,
        rating: 4.5,
        reviews: 88,
        imageUrl: 'https://via.placeholder.com/200' // Replace with actual image URL
    },
    {
        id: 2,
        name: 'AK-900 Wired Keyboard',
        price: 960,
        discount: 15,
        originalPrice: 1160,
        rating: 4.5,
        reviews: 75,
        imageUrl: 'https://via.placeholder.com/200' // Replace with actual image URL
    },
    {
        id: 3,
        name: 'IPS LCD Gaming Monitor',
        price: 370,
        discount: 30,
        originalPrice: 400,
        rating: 4.5,
        reviews: 99,
        imageUrl: 'https://via.placeholder.com/200' // Replace with actual image URL
    },
    {
        id: 4,
        name: 'S-Series Comfort Chair',
        price: 375,
        discount: 25,
        originalPrice: 500,
        rating: 4.5,
        reviews: 65,
        imageUrl: 'https://via.placeholder.com/200' // Replace with actual image URL
    },
    {
        id: 5,
        name: 'S-Series Comfort Chair',
        price: 375,
        discount: 25,
        originalPrice: 500,
        rating: 4.5,
        reviews: 65,
        imageUrl: 'https://via.placeholder.com/200' // Replace with actual image URL
    },
    {
        id: 6,
        name: 'Logitech Gaming Mouse',
        price: 50,
        discount: 10,
        originalPrice: 55,
        rating: 4.7,
        reviews: 150,
        imageUrl: 'https://via.placeholder.com/200' // Replace with actual image URL
    },
    {
        id: 7,
        name: 'Razer BlackWidow Keyboard',
        price: 120,
        discount: 20,
        originalPrice: 150,
        rating: 4.8,
        reviews: 200,
        imageUrl: 'https://via.placeholder.com/200' // Replace with actual image URL
    }
];

const FlashSales = () => {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
    const [flashSales, setFlashSales] = useState(initialFlashSales);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    fetchNewAds();
                    return 24 * 60 * 60; // reset to 24 hours
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const fetchNewAds = () => {
        // Simulate fetching new ads by resetting the initial data
        setFlashSales(initialFlashSales);
    };

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = seconds % 60;
        return { days, hours, minutes, secs };
    };

    const { days, hours, minutes, secs } = formatTime(timeLeft);

    return (
        <div className="flash-sales">
            <h2>Flash Sales</h2>
            <div className="timer">
                <div className="time-box">
                    <span className="time">{days}</span>
                    <span className="label">Days</span>
                </div>
                <div className="time-box">
                    <span className="time">{hours}</span>
                    <span className="label">Hours</span>
                </div>
                <div className="time-box">
                    <span className="time">{minutes}</span>
                    <span className="label">Minutes</span>
                </div>
                <div className="time-box">
                    <span className="time">{secs}</span>
                    <span className="label">Seconds</span>
                </div>
            </div>
            <div className="products">
                {flashSales.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">
                                <span className="current-price">${product.price}</span>
                                <span className="original-price">${product.originalPrice}</span>
                            </p>
                            <p className="discount">{product.discount}% off</p>
                            <div className="rating">
                                <span>⭐{product.rating}</span>
                                <span>({product.reviews} reviews)</span>
                            </div>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-all">View All Products</button>
        </div>
    );
};

export default FlashSales;
