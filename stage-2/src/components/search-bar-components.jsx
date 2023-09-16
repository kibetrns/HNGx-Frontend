import React, { useState } from "react";
import "../styles/search-bar-components.css";

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
      <dvr>
        <input
          type="text"
          placeholder="What do you want to watch ?"
          value={query}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </dvr>

      <div id="search-icon">
        <i class="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
      </div>
    </div>
  );
};

export default SearchBar;
