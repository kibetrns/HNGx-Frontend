import React, { useState } from "react";
import "../styles/search-bar-component.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <div>
        <input
          type="text"
          placeholder="Search by property type"
          value={query}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </div>

      <div id="search-icon">
        <i class="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
      </div>
    </div>
  );
};

export default SearchBar;
