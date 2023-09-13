import React, { useState } from 'react';
import "../styles/landing-page.css"

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(query);
    };
  
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="What do you want to watch."
          value={query}
          onChange={handleInputChange}
        />
        <i class="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>

             </div>

    );
  };
  
  export default SearchBar;