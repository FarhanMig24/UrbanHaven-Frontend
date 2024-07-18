import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons/fa
import './SearchBar.css'; // Optional: import CSS for styling

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="One step to urbanize..." className="search-input" />
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
