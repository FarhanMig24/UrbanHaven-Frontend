import React from 'react';
import SearchBar from '../utilities/SearchBar';
import Banner from './Banner';
import FlashSales from './Flashsales';
import CategoryBrowse from './CategoriesBrowse';
import BestSellingProducts from './BestSellingProducts';
// import ProductExplore from './ProductExplore';

const HomePage = () => {
    return (
        <div>
            <SearchBar />
            <Banner />
            <FlashSales />
            <CategoryBrowse />
            <BestSellingProducts />
        </div>
    );
}

export default HomePage;
