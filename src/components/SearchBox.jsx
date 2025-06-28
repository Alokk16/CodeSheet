import React, { useState } from 'react';

const SearchBox = ({ searchTerm, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className={`search-box ${isFocused ? 'focused' : ''}`}
          placeholder="Search for languages and frameworks..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {/* Search Icon */}
        <div className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="21 21l-4.35-4.35"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;